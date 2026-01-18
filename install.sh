#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "=== Dotfiles Installation ==="

# devcontainer環境判定
is_devcontainer() {
    [ -n "${CODESPACES:-}" ] || [ -n "${REMOTE_CONTAINERS:-}" ] || [ -f /.dockerenv ]
}

if is_devcontainer; then
    echo "Running in devcontainer mode..."

    # 1. Linuxbrewインストール (非対話モード)
    if ! command -v brew &> /dev/null; then
        echo "Installing Linuxbrew..."
        NONINTERACTIVE=1 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    fi
    eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

    # 2. シンボリックリンク作成
    echo "Creating symlinks..."
    "${SCRIPT_DIR}/bin/link.sh"

    # 3. Brewパッケージインストール (既存の.Brewfileを使用)
    echo "Installing brew packages..."
    brew bundle --file="${SCRIPT_DIR}/bin/.Brewfile"

    # 4. zshをデフォルトシェルに設定
    if command -v zsh &> /dev/null && command -v sudo &> /dev/null; then
        echo "Setting zsh as default shell..."
        sudo chsh -s "$(which zsh)" "$(whoami)" 2>/dev/null || true
    fi

    echo "=== Dotfiles installation complete ==="
else
    echo "Running in normal mode..."
    # 通常のmacOS/Linuxデスクトップ環境
    "${SCRIPT_DIR}/bin/init.sh"
    "${SCRIPT_DIR}/bin/link.sh"
    "${SCRIPT_DIR}/bin/brew.sh"
fi

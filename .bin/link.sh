#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# symlinkでない.configを直接symlinkに書き換えようとするとOSに怒られるので退避
[[ -e "${HOME}/.config" ]] && [[ ! -L "${HOME}/.config" ]] && mv "${HOME}/.config" "${HOME}/.config.bak"

for dotfile in "${SCRIPT_DIR}"/.??* ; do
    [[ "$dotfile" == "${SCRIPT_DIR}/.git" ]] && continue
    [[ "$dotfile" == "${SCRIPT_DIR}/.github" ]] && continue
    [[ "$dotfile" == "${SCRIPT_DIR}/.DS_Store" ]] && continue

    ln -fnsv "$dotfile" "$HOME"
done
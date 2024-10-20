#!/bin/bash
set -o xtrace

if [ "$(uname)" = "Darwin" ] ; then
	# Install xcode
	xcode-select --install > /dev/null

	# Install brew
	/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" > /dev/null

	if [ ! -e "${HOME}/.ssh" ] ; then
		ssh-keygen -t rsa -N ''
	fi
fi

if [ "$(uname)" = "Linux" ] ; then
	sudo apt update
	sudo apt install -y build-essential procps curl file git input-remapper

	# brew
	/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
	(echo; echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"') >> ~/.bashrc
    eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
    brew install gcc

	# code
	sudo snap install code --classic

	# bitwarden
	sudo snap install bitwarden

	# docker
	curl -fsSL https://get.docker.com -o /tmp/get-docker.sh
	sudo sh /tmp/get-docker.sh
  
	# nerd-font
	git clone --depth 1 https://github.com/ryanoasis/nerd-fonts.git /tmp/nerd-fonts
	sh /tmp/nerd-fonts/install.sh

 	# mozc
        sudo apt install -y mozc-utils-gui

	# input-remapper
	# sudo apt install -y python3-setuptools gettext
	# git clone https://github.com/sezanzeb/input-remapper.git
	# cd input-remapper && ./scripts/build.sh
	# sudo apt install -f ./dist/input-remapper-2.0.1.deb
	wget -P /tmp https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
	sudo apt install /tmp/google-chrome-stable_current_amd64.deb

	wget -P /tmp https://github.com/xremap/xremap/releases/download/v0.10.0/xremap-linux-x86_64-gnome.zip
	sudo unzip /tmp/xremap-linux-x86_64-gnome.zip -d /usr/local/bin

	cat << EOS | sudo tee /etc/systemd/system/xremap.service
	[Unit]
	Description = xremap daemon

	[Service]
	ExecStart = xremap /usr/local/etc/xremap/config.yaml
	Restart = always
	Type = simple

	[Install]
	WantedBy = multi-user.target
EOS

	wget -P /tmp https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb	
	sudo apt install -y /tmp/google-chrome-stable_current_amd64.deb

	# albert
  echo 'deb http://download.opensuse.org/repositories/home:/manuelschneid3r/xUbuntu_22.04/ /' | sudo tee /etc/apt/sources.list.d/home:manuelschneid3r.list
  curl -fsSL https://download.opensuse.org/repositories/home:manuelschneid3r/xUbuntu_22.04/Release.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/home_manuelschneid3r.gpg > /dev/null
  sudo apt update
  sudo apt install albert

	# alacritty
	git clone https://github.com/alacritty/alacritty.git /tmp/alacritty
	curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
	sudo apt install cmake pkg-config libfreetype6-dev libfontconfig1-dev libxcb-xfixes0-dev python3
	cargo build --release --manifest-path /tmp/alacritty/Cargo.toml
	sudo cp /tmp/alacritty/target/release/alacritty /usr/local/bin
	sudo cp /tmp/alacritty/extra/logo/alacritty-term.svg /usr/share/pixmaps/Alacritty.svg
	sudo desktop-file-install /tmp/alacritty/extra/linux/Alacritty.desktop
	sudo update-desktop-database
	sudo cp /tmp/alacritty/extra/completions/_alacritty /usr/share/zsh/functions/Completion/

	# xremap
	SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
    sudo ln -fnsv "$SCRIPT_DIR/xremap" "/usr/local/etc"
	sudo systemctl daemon-reload && sudo systemctl start xremap
fi


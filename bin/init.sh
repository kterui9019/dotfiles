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

	wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb	
	sudo apt install ./google-chrome-stable_current_amd64.deb

	SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
    ln -fnsv "$SCRIPT_DIR/xremap" "/usr/local/etc"
	sudo systemctl daemon-reload && sudo systemctl start xremap && sudo systemctl status xrema
fi


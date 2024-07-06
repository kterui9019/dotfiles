#!/bin/bash

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
	sudo apt install -y build-essential procps curl file git 

	# brew
	/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
	(echo; echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"') >> ~/.bashrc
    eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
    brew install gcc

	# code
	snap install code
fi


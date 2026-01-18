#!/bin/bash

# if [ "$(uname)" != "Darwin" ] ; then
# 	echo "Not macOS!"
# 	exit 1
# fi

if [ "$(uname)" = "Darwin" ] ; then
    ARCH=$(uname -m)
    if [[ $ARCH == arm64 ]]; then
        eval $(/opt/homebrew/bin/brew shellenv)
    elif [[ $ARCH == x86_64 ]]; then
        eval $(/usr/local/bin/brew shellenv)
    fi
fi

if [ "$(uname)" = "Linux" ] ; then
    eval $(/home/linuxbrew/.linuxbrew/bin/brew shellenv)
fi

brew bundle --global

#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

for dotfile in "${SCRIPT_DIR}"/.??* ; do
    [[ "$dotfile" == "${SCRIPT_DIR}/.git" ]] && continue
    [[ "$dotfile" == "${SCRIPT_DIR}/.github" ]] && continue
    [[ "$dotfile" == "${SCRIPT_DIR}/.DS_Store" ]] && continue

    if [ "$dotfile" == "${SCRIPT_DIR}/.config" ] ; then
        mkdir -p "$HOME/.config"
        for configfile in "${SCRIPT_DIR}"/.config/* ; do
            ln -fnsv "$configfile" "$HOME/.config"
        done

        continue
    fi

    ln -fnsv "$dotfile" "$HOME"
done
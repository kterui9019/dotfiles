#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

for dotfile in "${SCRIPT_DIR}"/.??* ; do
    [[ "$dotfile" == "${SCRIPT_DIR}/.git" ]] && continue
    [[ "$dotfile" == "${SCRIPT_DIR}/.github" ]] && continue
    [[ "$dotfile" == "${SCRIPT_DIR}/.DS_Store" ]] && continue
    # TODO: ln: /Users/$username/.config: Operation not permitted
    [[ "$dotfile" == "${SCRIPT_DIR}/.config" ]] && continue

    # TODO: ln: /Users/$username/.config/$dirname: Operation not permitted
    # if [ "$dotfile" == "${SCRIPT_DIR}/.config" ] ; then
    #     mkdir -p "$HOME/.config"
    #     for configfile in "${SCRIPT_DIR}"/.config/* ; do
    #         ln -fnsv "$configfile" "$HOME/.config"
    #     done

    #     continue
    # fi

    ln -fnsv "$dotfile" "$HOME"
done
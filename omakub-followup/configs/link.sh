SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

for dotfile in "${SCRIPT_DIR}"/configs/.??*; do
  [[ "$dotfile" == "${SCRIPT_DIR}/configs/.git" ]] && continue
  [[ "$dotfile" == "${SCRIPT_DIR}/configs/.github" ]] && continue
  [[ "$dotfile" == "${SCRIPT_DIR}/configs/.DS_Store" ]] && continue

  if [ "$dotfile" == "${SCRIPT_DIR}/configs/.config" ]; then
    mkdir -p "$HOME/.config"
    for configfile in "${SCRIPT_DIR}"/configs/.config/*; do
      DIST_PATH="${HOME}/.config/$(basename ${configfile})"

      if [ -e $DIST_PATH ]; then
        echo "exists"
        echo "${HOME}/.config/$(basename ${configfile})"
        mv -i $DIST_PATH "${DIST_PATH}.bak"
      fi
      ln -fnsv "$configfile" "$HOME/.config"
    done

    continue
  fi

  ln -fnsv "$dotfile" "$HOME"
done

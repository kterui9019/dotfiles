eval "$(starship init zsh)"

alias ls='lsd'
alias ll='ls -l'
alias la='ls -a'
alias lla='ls -la'
alias lt='ls --tree'
alias vi='lvim'
alias gg='lazygit'
alias tf='terraform'
alias k='kubectl'
alias kn='kubie ns'
alias kx='kubie ctx'

[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh
[ -f ~/.tmux.zsh ] && source ~/.tmux.zsh
[ -f ~/.gcloud.zsh ] && source ~/.gcloud.zsh
[ -f ~/.zshrc.local ] && source ~/.zshrc.local

cd-fzf-find() {
    local DIR=$(find ./ -path '*/\.*' -name .git -prune -o -type d -print 2> /dev/null | fzf +m)
    if [ -n "$DIR" ]; then
        cd $DIR
    fi
}
alias fd=cd-fzf-find

vim-fzf-find() {
    local FILE=$(find ./ -path '*/\.*' -name .git -prune -o -type f -print 2> /dev/null | fzf +m)
    if [ -n "$FILE" ]; then
        ${EDITOR:-vim} $FILE
    fi
}
alias fc=vim-fzf-find

# Gitリポジトリに移動する(ghq list > cd)
cd-fzf-ghqlist() {
    local GHQ_ROOT=`ghq root`
    local REPO=`ghq list -p | sed -e 's;'${GHQ_ROOT}/';;g' |fzf +m`
    if [ -n "${REPO}" ]; then
        BUFFER="cd ${GHQ_ROOT}/${REPO}"
    fi
    zle accept-line
}
zle -N cd-fzf-ghqlist

# GitリポジトリをCodeで開く(ghq list > code)
function code-fzf-ghqlist() {
    local GHQ_ROOT=`ghq root`
    local REPO=`ghq list -p | sed -e 's;'${GHQ_ROOT}/';;g' |fzf +m`
    if [ -n "${REPO}" ]; then
        BUFFER="code ${GHQ_ROOT}/${REPO}"
    fi
    zle accept-line
}
alias gc=code-fzf-ghqlist


# Gitブランチを切り替えする(git branch > git checkout)
function checkout-fzf-gitbranch() {
    local GIT_BRANCH=$(git branch --all | grep -v HEAD | fzf +m)
    if [ -n "$GIT_BRANCH" ]; then
        git checkout $(echo "$GIT_BRANCH" | sed "s/.* //" | sed "s#remotes/[^/]*/##")
    fi
    zle accept-line
}
zle -N checkout-fzf-gitbranch

# Gitブランチ指定を楽にする
alias -g B='`git branch --all | grep -v HEAD | fzf -m | sed "s/.* //" | sed "s#remotes/[^/]*/##"`'

# コマンド履歴(history > コマンドラインバッファー)
function buffer-fzf-history() {
    local HISTORY=$(history -n -r 1 | fzf +m)
    BUFFER=$HISTORY
    if [ -n "$HISTORY" ]; then
        CURSOR=$#BUFFER
    else
        zle accept-line
    fi
}
zle -N buffer-fzf-history

# 登録サーバにSSH(cat ~/.ssh/config > ssh)
function ssh-fzf-sshconfig() {
    local SSH_HOST=$(awk '
        tolower($1)=="host" {
            for (i=2; i<=NF; i++) {
                if ($i !~ "[*?]") {
                    print $i
                }
            }
        }
    ' ~/.ssh/config | sort | fzf +m)
    if [ -n "$SSH_HOST" ]; then
        BUFFER="ssh $SSH_HOST"
    fi
    zle accept-line
}
zle -N ssh-fzf-sshconfig

bindkey '^G' cd-fzf-ghqlist
bindkey '^R' buffer-fzf-history
bindkey '^O' checkout-fzf-gitbranch
bindkey '^\' ssh-fzf-sshconfig

# for lazygit
export XDG_CONFIG_HOME="$HOME/.config"

# for mise
eval "$(/opt/homebrew/bin/mise activate zsh)"

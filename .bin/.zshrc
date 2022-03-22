eval "$(starship init zsh)"

alias ls='lsd'
alias ll='ls -l'
alias la='ls -a'
alias lla='ls -la'
alias lt='ls --tree'

alias tf='terraform'
alias k='kubectl'
alias kns='kubens'
alias kctx='kubectx'

[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh
[ -f ~/.tmux.zsh ] && source ~/.tmux.zsh
[ -f ~/.gcloud.zsh ] && source ~/.gcloud.zsh
[ -f ~/.zshrc.local ] && source ~/.zshrc.local


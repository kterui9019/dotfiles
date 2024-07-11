#!/bin/bash

if [ "$(uname)" != "Darwin" ] ; then
	echo "Not macOS!"
	exit 0
fi

# ====================
#
# Base
#
# ====================

# Disable auto-capitalization
defaults write NSGlobalDomain NSAutomaticCapitalizationEnabled -bool false

# キーリピートの高速化
defaults write NSGlobalDomain KeyRepeat -int 2
defaults write NSGlobalDomain InitialKeyRepeat -int 15

# Character Picker無効化
defaults write -g ApplePressAndHoldEnabled -bool false

# タップしたときに、クリックとする
defaults write -g com.apple.mouse.tapBehavior -int 1

# ====================
#
# Dock
#
# ====================

# Disable animation at application launch
defaults write com.apple.dock launchanim -bool false

# Automatically hide or show the Dock （Dock を自動的に隠す）
defaults write com.apple.dock autohide -bool true

# Wipe all app icons from the Dock （Dock に標準で入っている全てのアプリを消す、Finder とごみ箱は消えない）
defaults write com.apple.dock persistent-apps -array

# Set the icon size （アイコンサイズの設定）
defaults write com.apple.dock tilesize -int 50

# ====================
#
# Finder
#
# ====================

# 新しいウィンドウでデフォルトでホームフォルダを開く
defaults write com.apple.finder NewWindowTarget -string "PfDe"
defaults write com.apple.finder NewWindowTargetPath -string "file://${HOME}/"

# Disable animation
defaults write com.apple.finder DisableAllAnimations -bool true

# Show hidden files by default
defaults write com.apple.finder AppleShowAllFiles -bool true

# Show files with all extensions
defaults write NSGlobalDomain AppleShowAllExtensions -bool true

# Display the status bar
defaults write com.apple.finder ShowStatusBar -bool true

# Display the path bar
defaults write com.apple.finder ShowPathbar -bool true

# ====================
#
# SystemUIServer
#
# ====================

# Display date, day, and time in the menu bar
defaults write com.apple.menuextra.clock DateFormat -string 'EEE d MMM HH:mm'

# Display battery level in the menu bar
defaults write com.apple.menuextra.battery ShowPercent -string "YES"

for app in "Dock" \
	"Finder" \
	"SystemUIServer"; do
	killall "${app}" &> /dev/null
done

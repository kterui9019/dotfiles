wget -P /tmp https://github.com/xremap/xremap/releases/download/v0.10.0/xremap-linux-x86_64-gnome.zip
sudo unzip /tmp/xremap-linux-x86_64-gnome.zip -d /usr/local/bin

cat <<EOS | sudo tee /etc/systemd/system/xremap.service
	[Unit]
	Description = xremap daemon

	[Service]
	ExecStart = xremap /usr/local/etc/xremap/config.yaml
	Restart = always
	Type = simple

	[Install]
	WantedBy = multi-user.target
EOS

# xremap
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
sudo ln -fnsv "${SCRIPT_DIR}/configs/xremap" "/usr/local/etc"
sudo systemctl daemon-reload && sudo systemctl start xremap

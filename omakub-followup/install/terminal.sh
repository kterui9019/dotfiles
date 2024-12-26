SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

sudo apt update -y
sudo apt upgrade -y
sudo apt install -y cmake

for installer in "${SCRIPT_DIR}"/install/terminal/*.sh; do source $installer; done
# for installer in ./terminal/*.sh; do source $installer; done

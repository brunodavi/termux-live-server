
# termux-live-server
Learn how to create your own "live server" using termux

---

### Install PHP
    pkg update && pkg upgrade
    pkg install php

---

### How to use
    pkg install git
    git clone https://github.com/brunodavi/termux-live-server.git
    cd termux-live-server/localhost/
    php -S 0.0.0.0:5500

---

### Autoload

`<meta http-equiv="refresh" content="seconds">`

> To view remotely, change 0.0.0.0 by your IP which can be seen with the `ifconfig` command in wlan0


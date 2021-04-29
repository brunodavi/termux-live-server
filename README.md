
# termux-live-server
Learn how to create your own [live-server](https://github.com/tapio/live-server) using termux

---

### Install PHP
    pkg update && pkg upgrade
    pkg install node
    npm install live-server

---

### How to use
    pkg install git
    git clone https://github.com/brunodavi/termux-live-server.git
    cd termux-live-server/localhost/
    npx live-server

> To view remotely on another device, instead of `127.0.0.1:8000`
> use your `IP:8000` that can be seen with `ifcongfig` command 
> on the part of wlan0


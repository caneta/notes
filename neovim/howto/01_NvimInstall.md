# Neovim installation on Ubuntu 12.04
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:neovim-ppa/unstable
sudo apt-get update
sudo apt-get install neovim
sudo apt-get install python-dev python-pip python3-dev python3-pip
pip3 install neovim

install nvm
git clone https://github.com/creationix/nvm.git ~/.nvm && cd ~/.nvm && git checkout `git describe --abbrev=0 --tags`


install node
nvm install 6.2.2

npm install jshint

Be sure to use a terminal with true colors support, for example gnome-terminal-3.12.3


* Add repository reference [here](https://launchpad.net/~neovim-ppa/+archive/ubuntu/unstable)
    ```
    sudo add-apt-repository ppa:neovim-ppa/unstable
    ```

    If this doesn't work, add manaually the following to **/etc/apt/sources.list**

    ```
    deb http://ppa.launchpad.net/neovim-ppa/unstable/ubuntu precise main
    deb-src http://ppa.launchpad.net/neovim-ppa/unstable/ubuntu precise main
    ```

* Install
    ```
    sudo apt-get update
    sudo apt-get install neovim
    ```

* The configuration file for Neovim is **~/.config/nvim/init.vim**

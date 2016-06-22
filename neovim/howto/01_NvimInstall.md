# Neovim installation on Ubuntu 12.04
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

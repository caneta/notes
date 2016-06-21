# Neovim basic configuration for a Linux terminal
This has been tested on a xfce4-terminal-0.6.3
* Install [Base16 Shell](https://github.com/chriskempson/base16-shell)
* Install manually [Base16 Vim](https://github.com/chriskempson/base16-vim):
    ```
    cd ~/.config/nvim/colors
    git clone git://github.com/chriskempson/base16-vim.git base16
    cp base16/colors/*.vim .
    rm -vfr base16/
    ```
* Add to your **init.vim** the following:
    ```
    let base16colorspace=256  " Access colors present in 256 colorspace
    ```
* Add a colorscheme for your terminal inside **.bashrc**:
    ```
    BASE16_SHELL="$HOME/.config/base16-shell/base16-bright.dark.sh"
    [[ -s $BASE16_SHELL ]] && source $BASE16_SHELL
    ```
* Set your color scheme inside your **init.vim**:
    ```
    set background=dark " Set colorscheme dark variant
    colorscheme base16-bright
    ```
* To increase font the only way is to increase it for your terminal

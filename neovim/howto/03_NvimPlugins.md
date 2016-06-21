# Neovim Plugin Management with vim-plug
* Install [Plug](https://github.com/junegunn/vim-plug) as plugin manager:
    ```
    curl -fLo ~/.config/nvim/autoload/plug.vim --create-dirs \
        https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
    ```
* Add the following to **init.vim**
    ```
    call plug#begin('~/.config/nvim/plugins')
    Plug 'vim-airline/vim-airline'
    Plug 'tpope/vim-commentary'
    Plug 'tpope/vim-repeat'
    Plug 'tpope/vim-surround'
    Plug 'tpope/vim-unimpaired'
    Plug 'tpope/vim-fugitive'
    Plug 'neomake/neomake'
    call plug#end()
    ```
* Run command `:PlugInstall`
* Add the following to **init.vim**
    ```
    autocmd! BufWritePost,BufEnter * Neomake " To run neomake automatically at file save
    ```

" Hook needed for detoplete installation
function! DoRemote(arg)
  UpdateRemotePlugins
endfunction

" ==============================================================
" Using vim-plug as plugin manager
call plug#begin('~/.config/nvim/plugins')

" Colorschemes
Plug 'morhetz/gruvbox'
Plug 'tomasr/molokai'
Plug 'mhartington/oceanic-next'

" Fonts
Plug 'ryanoasis/vim-devicons'

" Other
Plug 'vim-airline/vim-airline'
Plug 'tpope/vim-commentary'
Plug 'tpope/vim-repeat'
Plug 'tpope/vim-surround'
Plug 'tpope/vim-unimpaired'
Plug 'tpope/vim-fugitive'
Plug 'neomake/neomake'
Plug 'Raimondi/delimitMate'
Plug 'ludovicchabant/vim-gutentags'
Plug 'chrisbra/Colorizer'
Plug 'mattn/emmet-vim'
Plug 'Shougo/deoplete.nvim', { 'do': function('DoRemote') }
Plug 'carlitux/deoplete-ternjs', { 'do': 'npm install -g tern' }

call plug#end()

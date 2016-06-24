" Hook needed for detoplete installation
function! DoRemote(arg)
  UpdateRemotePlugins
endfunction

" ==============================================================
" Using vim-plug as plugin manager
call plug#begin('~/.config/nvim/plugins')

" Look and feel
Plug 'mhinz/vim-startify'       " Fancy start screen
Plug 'morhetz/gruvbox'          " Retro groove color scheme
Plug 'tomasr/molokai'           " Monokai inspired color scheme
Plug 'mhartington/oceanic-next' " Sublime Text inspired color scheme
Plug 'ryanoasis/vim-devicons'   " File type icons to many plugins such as NERDTree, vim-airline, etc
Plug 'vim-airline/vim-airline'  " Light status bar and tabline
Plug 'Yggdroot/indentLine'      " Display indentation levels with vertical lines
Plug 'chrisbra/Colorizer'       " Color the background of a CSS colorname (Hex, RGBA, etc)

" Syntax specific
Plug 'andreshazard/vim-freemarker'

" Utilities
Plug 'tpope/vim-commentary'
Plug 'tpope/vim-repeat'
Plug 'tpope/vim-surround'
Plug 'tpope/vim-unimpaired'
Plug 'tpope/vim-fugitive'
Plug 'tpope/vim-vinegar'    " Defines some netrw behaviours and mappings
Plug 'godlygeek/tabular'    " Text filtering and alignment


" Autocompletion
Plug 'Shougo/deoplete.nvim', { 'do': function('DoRemote') }
Plug 'Raimondi/delimitMate'
Plug 'mattn/emmet-vim'

" Linting stuff
Plug 'ludovicchabant/vim-gutentags'
Plug 'neomake/neomake'
Plug 'carlitux/deoplete-ternjs', { 'do': 'npm install -g tern' }

call plug#end()

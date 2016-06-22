" Look and feel
let $NVIM_TUI_ENABLE_TRUE_COLOR=1
set termguicolors " Use 24 bit colors
set background=dark         " Set colorscheme dark variant
set title                   " Set title in terminal window
set number                  " Set line numbers
set list                    " Display unprintable characters
set listchars=tab:▸\ ,eol:¬ " Redefine unprintable characters
set cursorline              " Highlight current line
set showmatch               " blink on matching brackets

" Indentation
set autoindent    " Copy indent from current line when starting a new line
set smartindent   " Do smart autoindenting when starting a new line
set expandtab     " When pressing <Tab> use spaces instead
set softtabstop=2 " How many spaces instead of a <Tab>
set shiftwidth=2  " How many spaces with autoindent
set tabstop=2     " Number of spaces used to visually represent a <Tab>

" Buffer settings
set hidden " Switching to another buffer, it hides already opened and modified buffers instead of closing them

" Folding
set foldmethod=indent " fold based on indent
set nofoldenable      " no fold by default
set foldcolumn=2      " show columns of folding representation at a side of window
set foldlevel=1       " folds with a higher level will be closed
set foldnestmax=2     " deepest fold nesting

" Per file type settings
autocmd FileType markdown setlocal softtabstop=4 shiftwidth=4

" Remaps (pipe is needed to make comments not part of mappings)
nnoremap <silent> <C-l> :<C-u>nohlsearch<CR><C-l>| " Set ctr-l to clean up last search match highlight
nnoremap K i<CR><Esc>|                             " The opposite of J: split single line in two at cursor position

" Mapping using leader (default is '\')
vnoremap <leader>c "+yh|        " Visual mode: copy in the system clipboard with \c
nnoremap <leader>v "+p|         " Normal mode: paste from the system clipboard with \v
inoremap <leader>v <C-r><C-p>+| " Insert mode: paste from the system clipboard with \v
set clipboard+=unnamedplus

" ======================================================================
" Plugins with vim-plug
call plug#begin('~/.config/nvim/plugins')
" Colorschemes
Plug 'morhetz/gruvbox'
Plug 'tomasr/molokai'
" Fonts
Plug 'ryanoasis/vim-devicons'
" Normal Plugins
Plug 'vim-airline/vim-airline'
Plug 'tpope/vim-commentary'
Plug 'tpope/vim-repeat'
Plug 'tpope/vim-surround'
Plug 'tpope/vim-unimpaired'
Plug 'tpope/vim-fugitive'
Plug 'neomake/neomake'
call plug#end()

colorscheme molokai " Must to be put under vim-plug stuff

" Neomake conf
autocmd! BufWritePost,BufEnter * Neomake " To run neomake automatically at file save

" Vim airline
let g:airline_powerline_fonts=1 " Use powerline fonts, installed with nerd fonts
let g:airline#extensions#tabline#enabled=1 " Set enhanced tabline
let g:airline#extensions#tabline#fnamemod=':t' " Filename format: tail of the filename

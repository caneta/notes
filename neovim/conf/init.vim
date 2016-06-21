" Look and feel
let base16colorspace=256    " Access colors present in 256 colorspace
set background=dark         " Set colorscheme dark variant
colorscheme base16-bright
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

" ======================================================================
" Plugins with vim-plug
call plug#begin('~/.config/nvim/plugins')
Plug 'vim-airline/vim-airline'
Plug 'tpope/vim-commentary'
Plug 'tpope/vim-repeat'
Plug 'tpope/vim-surround'
Plug 'tpope/vim-unimpaired'
Plug 'tpope/vim-fugitive'
Plug 'neomake/neomake'
call plug#end()

" Neomake conf
autocmd! BufWritePost,BufEnter * Neomake " To run neomake automatically at file save


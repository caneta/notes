" Remaps (pipe is needed to make comments not part of mappings)
nnoremap <silent> <C-l> :<C-u>nohlsearch<CR><C-l>| " Set ctr-l to clean up last search match highlight
nnoremap K i<CR><Esc>|                             " The opposite of J: split single line in two at cursor position

" Mapping using leader (default is '\')
vnoremap <leader>c "+yh|        " Visual mode: copy in the system clipboard with \c
nnoremap <leader>v "+p|         " Normal mode: paste from the system clipboard with \v
inoremap <leader>v <C-r><C-p>+| " Insert mode: paste from the system clipboard with \v
map <leader>e :Explore<CR>|     " Open netrw Esplore window
map <leader>q :wqa<CR>|         " Save every buffer and exit

" Neomake ===================================================
autocmd! BufWritePost,BufEnter * Neomake " To run neomake automatically at file save

" how to display messages
let g:neomake_warning_sign = { 'text': '⚠️' }
let g:neomake_error_sign = { 'text': '❌' }
let g:neomake_style_warning_sign = { 'text': '💩' }
let g:neomake_style_error_sign = { 'text': '⁉️' }


" vim-airline
let g:airline_theme='oceanicnext'
let g:airline_powerline_fonts=1 " Use powerline fonts, installed with nerd fonts
let g:airline#extensions#tabline#enabled=1 " Set enhanced tabline
let g:airline#extensions#tabline#fnamemod=':t' " Filename format: tail of the filename

" delimitMate
let delimitMate_expand_cr=1 " Put a further <CR> after, for exampole a {<CR>

" Colorizer
let g:colorizer_auto_filetype='css,html,scss,jsp,ftl,js'
let g:colorizer_skip_comments=1
let g:colorizer_colornames=0

" deoplete
let g:deoplete#enable_at_startup=1
inoremap <expr><tab> pumvisible() ? "\<c-n>" : "\<tab>"| " Use tab to autocomplete
autocmd CompleteDone * pclose! " Automatically close scratch window after selection

" deoplete-ternjs
let g:tern_request_timeout=1
" let g:tern_show_signature_in_pum=0  " This do disable full signature type on autocomplete


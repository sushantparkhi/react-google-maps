let SessionLoad = 1
if &cp | set nocp | endif
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/code/react-google-maps
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +1 src/Polygon.js
badd +25 src/creators/PolygonCreator.js
badd +12 src/HeatmapLayer.js
badd +58 src/creators/HeatmapLayerCreator.js
badd +1 src/eventLists/PolygonEventList.js
badd +1 src/eventLists/HeatmapLayerEventList.js
badd +1 src/Marker.js
badd +25 src/creators/MarkerCreator.js
badd +49 lib/index.js
badd +1 src/index.js
badd +25 src/creators/CircleCreator.js
badd +49 src/creators/DirectionsRendererCreator.js
argglobal
silent! argdel *
set stal=2
edit src/creators/HeatmapLayerCreator.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd _ | wincmd |
split
1wincmd k
wincmd w
wincmd w
wincmd _ | wincmd |
split
1wincmd k
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
exe '1resize ' . ((&lines * 26 + 28) / 56)
exe 'vert 1resize ' . ((&columns * 91 + 91) / 182)
exe '2resize ' . ((&lines * 26 + 28) / 56)
exe 'vert 2resize ' . ((&columns * 91 + 91) / 182)
exe '3resize ' . ((&lines * 26 + 28) / 56)
exe 'vert 3resize ' . ((&columns * 90 + 91) / 182)
exe '4resize ' . ((&lines * 26 + 28) / 56)
exe 'vert 4resize ' . ((&columns * 90 + 91) / 182)
argglobal
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal nofen
let s:l = 24 - ((12 * winheight(0) + 13) / 26)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
24
normal! 03|
wincmd w
argglobal
edit src/HeatmapLayer.js
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal nofen
let s:l = 3 - ((2 * winheight(0) + 13) / 26)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
3
normal! 0
wincmd w
argglobal
edit src/creators/PolygonCreator.js
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal nofen
let s:l = 1 - ((0 * winheight(0) + 13) / 26)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
wincmd w
argglobal
edit src/Marker.js
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal nofen
let s:l = 33 - ((23 * winheight(0) + 13) / 26)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
33
normal! 0
wincmd w
exe '1resize ' . ((&lines * 26 + 28) / 56)
exe 'vert 1resize ' . ((&columns * 91 + 91) / 182)
exe '2resize ' . ((&lines * 26 + 28) / 56)
exe 'vert 2resize ' . ((&columns * 91 + 91) / 182)
exe '3resize ' . ((&lines * 26 + 28) / 56)
exe 'vert 3resize ' . ((&columns * 90 + 91) / 182)
exe '4resize ' . ((&lines * 26 + 28) / 56)
exe 'vert 4resize ' . ((&columns * 90 + 91) / 182)
tabedit src/index.js
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
argglobal
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal nofen
let s:l = 12 - ((11 * winheight(0) + 26) / 53)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
12
normal! 053|
tabnext 1
set stal=1
if exists('s:wipebuf')
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToO
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
let g:this_session = v:this_session
let g:this_obsession = v:this_session
let g:this_obsession_status = 2
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :

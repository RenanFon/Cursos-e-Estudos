const bbuton = document.getElementById('bbuton')
function togglemenu(event){
const menu = document.getElementById('menu')
menu.classList.toggle('active')

}

bbuton.addEventListener('click',togglemenu)
function carregar(){
var img = window.document.getElementById('img')
var ft = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
img.innerHTML = `Agora são ${hora} horas `
if(hora >= 0 && hora <12 ){
    ft.src = 'imagens/mnhã.jpeg'
    document.body.style.background = 'rgb(194, 114, 39)'
    img.innerHTML += 'Bom Dia !!'
}else if(hora >= 12 && hora < 18){
    ft.src = 'imagens/tarde.jpeg'
    document.body.style.background = 'rgb(194, 114, 39)'
    img.innerHTML += 'Boa Tarde !!'
}else{
    ft.src = 'imagens/noite.jpeg'
    document.body.style.background = 'rgb(30, 30, 99)'
    img.innerHTML += 'Boa Noite !'
}



}
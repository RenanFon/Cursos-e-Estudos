var agora = new Date()
var hora = agora.getHours
console.log(`agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log('Bom Dia brow !!')
}else if(hora >=12 && hora < 18){
    console.log('Boa tarde senhor')
}else{
    console.log('Boa noite senhor')
}
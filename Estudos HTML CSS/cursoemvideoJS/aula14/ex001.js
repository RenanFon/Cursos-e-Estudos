var idade = 67
console.log(`voce tem ${idade} anos de idade`)
if (idade < 16) {
    console.log('nao vota')
}else if (idade < 18 || idade > 65) {
        console.log('voto opcional')
    
}else {
    console.log('voto obrigatorio')
}
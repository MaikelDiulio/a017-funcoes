function numero(num1,num2){
    const soma = num1 + num2
    console.log(soma)
}
numero(2,6)
numero(5,5)

//b
function doisNumeros(num1,num2){
    console.log(Boolean(num1 >= num2))
}
doisNumeros(8,6)
doisNumeros(5,5)
doisNumeros(2,6)

//c
function par(num){
    console.log("resultado da C", num %2 === 0)
}
par(5)
par(4)

//d

function mensagem(string){
    console.log(`Quantidade de letras da palavra: ${string.length} letras - ${string.toUpperCase()}`)
    //console.log(string.toUpperCase())
}

mensagem('Maikel')
//let nome = 'borabill'

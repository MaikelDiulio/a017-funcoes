//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.


// function meueNome(nome){
//     console.log(`olá, ${nome}`)
// }

// meueNome("Maikel")


// b) Declare uma função que imprima a tabuada do 6. Chame esta função.



function tabuada(array){
    const novoArray = []

    let vezes = [1,2,3,4,5,6,7,8,9,10]

    for(let i in vezes ){
    console.log(i*array)
        }
    return novoArray
}

const multiplicacao = [6]

console.log(tabuada(multiplicacao))


// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função,
// ou __arrow functions__ 

// const meueNome = (nome) => {
//     // console.log(`olá, ${nome}`)
// }

// meueNome("Maikel")

/////////////////////////////////////////


// const tabuada = (array) => {
//     const novoArray = []

//     let vezes = [1,2,3,4,5,6,7,8,9,10]

//     for(let i in vezes){
//     console.log(i*array)
//         }
//     return novoArray
// }

// const multiplicacao = [6]

// console.log(tabuada(multiplicacao))
//Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas
//  (soma, subtração, multiplicação e divisão).



const pergunta1 = Number(prompt("Digite um número:"))

const pergunta2 = Number(prompt("Digite mais um número:"))






const multiplicacao = (num1,num2) =>{
    const resolucao = num1 * num2
    return resolucao
}
multiplicacao()

////////////////////////////////////////////////////////////////

const divisao = (num1,num2) =>{
    const resolucao = num1 / num2
    return resolucao
}
divisao()

////////////////////////////////////////////////////////////////

const subtracao = (num1,num2) =>{
    const resolucao = num1 - num2
    return resolucao
}
subtracao()

/////////////////////////////////////////////////////////////////

const soma = (num1,num2) =>{
    const resolucao = num1 + num2
    return resolucao
}
soma()
// Em seguida, peça para o usuário inserir dois números
//  e chame essas 4 funções com esses valores inputados
//   pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações
console.log(`${pergunta1} , ${pergunta2}`)

console.log(`
Multiplicação: ${multiplicacao(pergunta1,pergunta2)}

Divisão: ${divisao(pergunta1,pergunta2)}

subtração: ${subtracao(pergunta1,pergunta2)}

Soma: ${soma(pergunta1,pergunta2)}`)
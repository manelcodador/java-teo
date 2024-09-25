// funçoes 

let x = 'nada'

console.log('nada')

x = 'oi'

console.log(x)

// declarar uma funcao
// estrutura nome da funcao(parametros) {funcionalidade}
function imprimetexto(texto) {
    console.log(texto)
}

imprimetexto('sou professor de math')
imprimetexto('ola mundo')

function soma() {
    return 2 + 2
}
imprimetexto(soma())
// console.log(soma())
function somadenumeros(numero1, numero2) {
    return numero1 + numero1
}

imprimetexto(somadenumeros(10, 8))

function divisaodenumeros(numero1, numero1) {
    return abobora / cenoura
}

imprimetexto(divisaodenumeros(10, 2))
imprimetexto(divisaodenumeros(2, 10))

// ordem de parametros

function apresentacao(nome, idade){
    return `meu nome é ${nome} e tenho ${idade} anos.`
}
imprimetexto(apresentacao('manel', 15))
imprimetexto(apresentacao(32, 'manel'))
// a ordem dos oaramentros é importante

//parametro incial pra que a funcao comece com um parametro pre definido
function multiplicacao (n1 = 1, n2 = 2){
    return n1 * n2
}

imprimetexto(multiplicacao(2, 5))
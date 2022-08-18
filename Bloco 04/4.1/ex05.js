//🚀 Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const a = 8
const b = 20
const c = 10

if ( a < 0 && b < 0 && c < 0){
    console.log('ERROR')
}
else if ( a + b + c <= 180 && a + b + c >= 0) {
    console.log('True')
} else {
    console.log('False')
}
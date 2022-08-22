//2 
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let number = 0;


for (let index = 2; index <= 150; index +=1) {
    if (index % 3 === 0){
        number += 1
    }
}
if (number === 50){
    console.log('Msg secreta')
}
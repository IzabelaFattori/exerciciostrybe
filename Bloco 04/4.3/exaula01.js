//// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
//A soma total de 1 a 50 é:

const n = 50;

let resultado = 0;
for (let index = 1; index <= n; index += 1) {
    resultado += index
};
console.log('A soma total de 1 a 50 é ' + resultado)

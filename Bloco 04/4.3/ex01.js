//1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let fatorial = 3;
let resultado = fatorial;

for ( i = 1; i < fatorial; i += 1) {
    resultado *= i
}
console.log(resultado)
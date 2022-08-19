//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let lista = [];
let result = [];


for ( i = 0; i <= 25 ; i++){
    lista.push(i)
}
for ( i = 0; i <= 25; i++){
    result.push(lista[i] / 2)
}
console.log(result)
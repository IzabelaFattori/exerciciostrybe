//🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = Number.NEGATIVE_INFINITY;

for ( i = 0; i < numbers.length ; i += 1){
    if (numbers[i] > maior){
        maior = numbers[i]
    }
}

console.log(maior)
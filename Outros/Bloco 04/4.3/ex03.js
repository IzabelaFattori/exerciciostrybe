//3- Considere o array de strings abaixo:
//let array = ['java', 'javascript', 'python', 'html', 'css'];
//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = Infinity;
let menor = Number.NEGATIVE_INFINITY;


for (i = 0; i < array.length; i += 1){
    if (array[i].length > menor) {
        menor = i
    }
    if(array[i].length < maior) {
        maior = i
    }
}

console.log("A maior palavra do array é " + array[maior + 1]);
console.log("A menor palavra do array é " + array[menor + 1]);
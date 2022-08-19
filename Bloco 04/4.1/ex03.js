//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 0
const b = 0
const c = 8


if (( a == b == c) || (b == c & b < a) || (a > b && a > c)) {
    console.log(a)
} else if (( a == b & a < c) || (c > a && c > b)){
    console.log(c)
} else if (( a == c & a < b) || (b > a && b > c)){
    console.log(b)
} else {
    console.log('ERROR')
} 
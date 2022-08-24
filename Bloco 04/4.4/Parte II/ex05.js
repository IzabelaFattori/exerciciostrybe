//🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//Array de teste: [2, 3, 2, 5, 8, 2, 3];.
//Valor esperado no retorno da função: 2.

let array = [2, 3, 2, 5, 8, 2, 3];

function repeticao(){
    let contador = 0;
    let repetidos = 0;
    let numero = 0;

    for( let i = 0; i < array.length; i += 1){
        for (let index = 0; index < array.length; index += 1){
            if (array[i] === array[index]){
                contador += 1
            }
        }
        if(contador > repetidos){
            repetidos = contador
            numero = array[i]
        }
        contador = 0
    }
    console.log('O número mais repetiro é o número ' + numero + ' repentindo ' +  repetidos + ' vezes.')
}

repeticao()

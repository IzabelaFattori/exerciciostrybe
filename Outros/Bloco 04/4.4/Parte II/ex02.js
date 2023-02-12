//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1];.
//Valor esperado no retorno da função: 4.

let values = [2, 3, 6, 7, 10, 1];

const maxValue = values.reduce(function(prev, current) { 
	return prev > current ? prev : current; 
});

console.log(maxValue)
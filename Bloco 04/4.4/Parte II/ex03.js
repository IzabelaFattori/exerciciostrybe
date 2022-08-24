//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Array de teste: [2, 4, 6, 7, 10, 0, -3];.
//Valor esperado no retorno da função: 6.


let values = [2, 4, 6, 7, 10, 0, -3];

const minValue = values.reduce(function(prev, current) { 
	return prev < current ? prev : current; 
});

console.log(minValue)
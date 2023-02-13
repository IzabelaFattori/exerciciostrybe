//7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
//Valor de teste: 'trybe' e 'be'
//Valor esperado no retorno da função: true
//verificaFimPalavra('trybe', 'be');
//Retorno esperado: true
//verificaFimPalavra('joaofernando', 'fernan');
//Retorno esperado: false

function verificacao () {
    let word = 'trybe'
    let ending = 'be'
    if(word.length < ending.length){
        console.log('ERROR')
    }

}

verificacao()
//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
//Valor esperado no retorno da função: Fernanda.

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];


function contador(){
    let ultimoTamanho = 0;
    let tamanho = 0; 
    let nome = "";

    for (let i = 0; i < nomes.length; i += 1){
        tamanho = nomes[i].length
        if (tamanho > ultimoTamanho){
            ultimoTamanho = tamanho
            nome = nomes[i]
        }
    }
     return nome
}

console.log(contador())




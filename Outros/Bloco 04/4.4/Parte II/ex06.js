//6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
//Valor de teste: N = 5.
//Valor esperado no retorno da função: 1+2+3+4+5 = 15.



function natural (){
    let n = 5;
    let n2 = n
    for (let i = 1; i < n2 ; i +=1){
        n += i
    }
console.log(n)
}

natural()
//1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
//Exemplo de palíndromo: arara.
//verificaPalindrome('arara');
//Retorno esperado: true
//verificaPalindrome('desenvolvimento');
//Retorno esperado: false

function checkPalindrome(str) {     
    for(var i = 0; i < str.length / 2; i++) if (str[i] != str[str.length - i - 1]) return false;
    return true;
}
console.log(checkPalindrome("arara"));
console.log(checkPalindrome("desencolvimento"));
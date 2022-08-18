//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//Exemplo: bishop (bispo) -> diagonals (diagonais)

let p = "Rainha".toLowerCase();

switch(p){
    case "cavalo":
        console.log('Os cavalos se movem em forma de L: dois quadrados na direção horizontal ou vertical e, a seguir, mova um quadrado horizontal ou verticalmente.'); 
        break;
    case "bispo":
        console.log('Os Bispos se movem diagonalmente, qualquer número de quadrados.');
        break;
    case "peao":
        console.log('Os peões se movem verticalmente para frente um quadrado, tendo a opção de se moverem dois se eles ainda nao se moveram.');
        break;
    case "torre":
        console.log ('As torres se movem horizontalmente ou verticalmente qualquer número de quadrados.');
        break;
    case "rainha":
        console.log('Rainhas se movem diagonalmente, horizontalmente ou verticalmente qualquer número de quadrados.');
        break;
    case "rei":
        console.log('Movimento de reis uma casa em qualquer direção, desde que essa casa não seja atacada por uma peça inimiga.');
        break;
    default:
        console.log('Peça Inválida');
    }
    

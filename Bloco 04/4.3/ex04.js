//4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.


const primo = (numb) => {
    for (let div = 2; div < numb; div++)
      if (numb % div == 0) {
        return false;
      }
  
    return true;
  };
  
  let numeroLimite = 50;
  let maior = 0;
  
  for (let i = 2; i < numeroLimite; i++) {
    if (primo(i)) {
      maior = i;
    }
  }
  
  console.log(maior);
//1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
//let names = {
//    person1: 'João',
//    person2: 'Maria',
//    person3: 'Jorge',
//  };


let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for (let ola in names){
    console.log('Olá', names[ola])
}
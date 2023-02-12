//🚀 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

let segundolivro = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco', 
}

leitor.livrosFavoritos.push(segundolivro);

let qntDeLivros = leitor.livrosFavoritos.length

console.log('Julia tem ' + qntDeLivros + ' livros favoritos.')
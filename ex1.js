// Criando o objeto aluno
let aluno = {
    nome: "Eduardo Rukhaber",
    idade: 21,
    curso: "Edificação Predial",
    notas: [7.5, 8.0, 9.5, 9.0]
  };
  
  // Função para calcular a média das notas e adicionar ao objeto
  function calcularMedia(aluno) {
    let soma = aluno.notas.reduce((acumulador, nota) => acumulador + nota, 0);
    let media = soma / aluno.notas.length;
    aluno.media = media.toFixed(2); // Adiciona a média com 2 casas decimais
  }
  
  // Chamando a função
  calcularMedia(aluno);
  
  // Exibindo o objeto atualizado
  console.log(aluno);
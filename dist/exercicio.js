"use strict";

var alunos = [{
  nome: "Matheus",
  nota: 11
}, {
  nome: "João",
  nota: 8
}, {
  nome: "Ana",
  nota: 7
}, {
  nome: "Lucas",
  nota: 6
}, {
  nome: "Luana",
  nota: 5
}, {
  nome: "Gian",
  nota: 4
}];
var alunosAprovados = alunos.filter(function (aluno) {
  return Number(aluno.nota) >= 6 && Number(aluno.nota) <= 10;
});
console.log(alunosAprovados);
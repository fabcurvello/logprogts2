let matriz: number[][] = [
  [1, 2],
  [3, 4],
];
console.log(matriz[0][1]); // 2
console.log(matriz[1][0]); // 3

let alunos = ["Ana", "Bruno", "Carlos"];

alunos.forEach(function (aluno, indice) {
  console.log(indice + ": " + aluno);
});
// 0: Ana
// 1: Bruno
// 2: Carlos

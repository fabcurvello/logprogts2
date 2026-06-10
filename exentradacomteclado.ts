// Exemplo de uso teclado.ts
import { teclado } from "./teclado";

let nome = teclado.leia("Nome: ");
let salario = Number(teclado.leia("Salário: "));

console.log("Dados informados:");
console.log(`Nome: ${nome}`);
console.log(`Salário: R$ ${salario.toFixed(2)}`);
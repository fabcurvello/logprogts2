// Necessário instalar o pacote @types/node para usar o módulo readline
// Comando para instalar: npm install @types/node --save-dev
// Confira a existência do arquivo tsconfig.json para garantir que o TypeScript reconheça os tipos do prompt-sync

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual é o seu nome? ", (nome) => {
    console.log(`Olá, ${nome}!`);
    rl.close();
});

rl.question("Digite sua idade: ", (entrada) => {

    let idade: number = Number(entrada);

    console.log(`Daqui a 10 anos você terá ${idade + 10} anos.`);

    rl.close();
});


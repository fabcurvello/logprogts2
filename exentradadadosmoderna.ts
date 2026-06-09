// Necessário instalar o pacote @types/node para usar o módulo readline
// Comando para instalar: npm install @types/node --save-dev

import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

async function main() {

    const rl = readline.createInterface({ input, output });

    const nome = await rl.question("Digite seu nome: ");
    const idade = Number(await rl.question("Digite sua idade: "));

    console.log(`Nome: ${nome}`);
    console.log(`Idade: ${idade}`);

    rl.close();
}

main();
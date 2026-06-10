// Necessário instalar o pacote promptSync para usar a função prompt
// Comandos para instalar: 
// npm install prompt-sync
// npm install @types/prompt-sync --save-dev
// Confira a existência do arquivo tsconfig.json para garantir que o TypeScript reconheça os tipos do prompt-sync

import promptSync from "prompt-sync";

const prompt = promptSync();

/*
    export function teclado(mensagem: string): string {
        return prompt(mensagem);
    }
*/

export const teclado = {
    leia(mensagem: string): string {
        return prompt(mensagem);
    }
};

// Exemplo de uso
// import { teclado } from "./teclado";
// let nome = teclado.leia("Nome: ");
// let salario = Number(teclado.leia("Salário: "));
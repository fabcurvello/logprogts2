// Verifica se um número é par ou ímpar
function verificarParOuImpar(numero: number): string {
    if (numero % 2 === 0) {
        return `${numero} é um número par.`;
    } else {
        return `${numero} é um número ímpar.`;
    }
}

// Exemplo de uso
const numero: number = 70;
console.log(verificarParOuImpar(numero));   

// Verifica se um número é maior ou menor que 100
function verificarMaiorOuMenorQue100(numero: number): string {
    if (numero >= 100) {
        return `${numero} é um número maior ou igual a 100.`;
    } else {
        return `${numero} é um número menor que 100.`;
    } 
}

// Exemplo de uso
const numero2: number = 0;
console.log(verificarMaiorOuMenorQue100(numero2));    


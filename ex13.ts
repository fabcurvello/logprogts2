let soma: number = 0;
for (let i: number = 1; i <= 5; i++) {
  soma += i;
}
console.log(soma);
soma = "errooooo!"; // JS não reclama
console.log(soma);

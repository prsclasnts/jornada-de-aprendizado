//2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado

const numeros = [1, 2, 4, 7, 9, 23, 18, 6];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(numeros[i]);
  }
}

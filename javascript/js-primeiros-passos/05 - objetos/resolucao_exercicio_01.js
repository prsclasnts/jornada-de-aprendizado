/* 
    1) Crie uma classe para representar carros. 
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
    Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
    gasto em reais para realizar este percurso.
*/

class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  calcularGastoPorPercurso(precoCombustivel, distanciaEmKm) {
    return distanciaEmKm * precoCombustivel * this.gastoMedioPorKm;
  }
}

const golzinho = new Carro("volkswagen", "prata", 1 / 12);
console.log(golzinho);
console.log(golzinho.calcularGastoPorPercurso(5, 70));

const palio = new Carro("fiat", "preto", 1 / 10);
console.log(palio.calcularGastoPorPercurso(5, 70));

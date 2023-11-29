
const tipoDeCombustivel = 'gasolina';
const precoEtanol = 3.64;
const precoGasolina = 5.63;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm/kmPorLitros;
let valorGasto = 0;

if(tipoDeCombustivel === 'etanol') {
    valorGasto = litrosConsumidos * precoEtanol;
} else {
    valorGasto = litrosConsumidos * precoGasolina;
}

console.log(valorGasto.toFixed(2)); //toFixed converte para string
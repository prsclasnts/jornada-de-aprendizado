const peso = 105;
const altura = 1.61;

const imc = peso / (altura*altura);
console.log(imc.toFixed(2));

if (imc < 18.5) {
    console.log('abaixo do peso');
} else if (imc < 25) {
    console.log('peso normal');
} else if (imc < 30) {
    console.log('acima do peso');
} else if (imc <= 40) {
    console.log('obeso');
} else {
    console.log('obesidade grave');
}
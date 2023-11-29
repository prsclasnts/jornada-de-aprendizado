const numero = 0;

//par ou ímpar
const isOdd = (numero % 2) === 0;

if(isOdd) {
    console.log('par');
} else {
    console.log('ímpar');
}

//múltiplo de 5
const isMultipleOf5 = (numero % 5) === 0;

if(numero === 0) {
    console.log('número inválido');
}else if(isMultipleOf5) {
    console.log('sim');
} else {
    console.log('não');
}
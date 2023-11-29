function calcularImc(peso, altura) {
  return peso / (altura * altura);
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return "abaixo do peso";
  } else if (imc < 25) {
    return "peso normal";
  } else if (imc < 30) {
    return "acima do peso";
  } else if (imc <= 40) {
    console.log("obeso");
  } else {
    return "obesidade grave";
  }
}
//função imediatamente invocada, anônima
// Main
(function () {
  const peso = 105;
  const altura = 1.61;

  const imc = calcularImc(peso, altura);
  console.log(classificarImc(imc));
})();

//main();
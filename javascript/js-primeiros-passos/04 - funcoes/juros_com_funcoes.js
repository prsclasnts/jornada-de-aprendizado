function aplicarJuros(valor, percentualJuros) {
  const valorAcrescimo = (percentualJuros / 100) * valor;
  return valor + valorAcrescimo;
}

function aplicarDesconto(valor, percentualDesconto) {
  const valorDesconto = (percentualDesconto / 100) * valor;
  return valor - valorDesconto;
}

(function () {
  const precoEtiqueta = 100;
  const formaDePagamento = 4;

  if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
  } else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
  } else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
  } else {
    console.log(aplicarJuros(precoEtiqueta, 10));
  }
})();

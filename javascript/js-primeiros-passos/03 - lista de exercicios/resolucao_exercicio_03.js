const precoEtiqueta = 20;
const parcelas = 1;
const condicaoAVista = "pix";

let valorAPagar = 0;

if (parcelas === 1) {
  let desconto = 0;

  if (condicaoAVista === "pix" || condicaoAVista === "dinheiro") {
    desconto = 0.15 * precoEtiqueta;
  } else {
    desconto = 0.1 * precoEtiqueta;
  }

  valorAPagar = precoEtiqueta - desconto;
} else if (parcelas === 2) {
    valorAPagar = precoEtiqueta;
} else {
    let juros = 0.1 * precoEtiqueta;
    valorAPagar = precoNormal + juros;
}

console.log(valorAPagar);

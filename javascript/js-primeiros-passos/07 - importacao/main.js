const {gets, print} = require('./funcoes_auxiliares');

const quantidadeDeEntradas = gets();
let maiorValor = 0;

for (let i = 0; i < quantidadeDeEntradas; i++) {
    const numeroSorteado = gets();
    
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}
 print(maiorValor);







//object destructuring
// const pessoa = {
//     nome: 'vitor'
// };

// const {nome} = pessoa; //é a mesma coisa que const nome = pessoa.nome;
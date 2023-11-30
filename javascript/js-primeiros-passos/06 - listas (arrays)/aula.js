

// const alunos = ['João', 'Vitor', 'Marina'];

// alunos.push('Renan');
// alunos[3] = 'Vinícius'; //sobrescreve Renan


// const numeros = ['1', '2', '3'];
// console.log(numeros); //mostra  a lista inteira

// console.log(numeros.pop()); //retorna o ultimo valor (3) e o remove da lista
// //console.log(alunos.shift());//faz a mesma coisa que o pop mas com o primeiro item
// console.log(numeros);// mostra a lista agora sem o valor 3

const notas = [];

notas.push(10);
notas.push(10);
notas.push(10);

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);

//Executando for em uma string
// const nome = 'Priscila';

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }
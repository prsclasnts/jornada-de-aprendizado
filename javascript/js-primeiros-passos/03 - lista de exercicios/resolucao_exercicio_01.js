//exercício 01
const nota1 = 8;
const nota2 = 8;
const nota3 = 5;

const media = (nota1 + nota2 + nota3)/3;
console.log(media.toFixed(2));

if(media < 5) {
    console.log('reprovado');
} else if(media <= 7) {
    console.log('recuperação');
} else {
    console.log('aprovado');
}

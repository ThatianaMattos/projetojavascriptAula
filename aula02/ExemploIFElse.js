const leia = require("readline-sync");

let nota1, nota2, nota3, media;

nota1 = leia.questionFloat("Digite a primeira Nota: ");

nota2 = leia.questionFloat("Digite a segunda Nota: ");

nota3 = leia.questionFloat("Digite a terceira Nota: ");

media = (nota1 + nota2 + nota3) / 3;

if (media >= 6) {
    console.log("Parabéns, você passou de ano!");
    }else if(media == 5){
    console.log("Aluno de exame!");
} else {
    console.log("Infelizmente você não passou de ano.");
}

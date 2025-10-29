// Importando a biblioteca
const leia = require("readline-sync");

//Declarando variáveis
let nome, distancia;
console.log("Digite seu nome: ");
nome = leia.question();

console.log("\nDigite a distância percorrida em sua corrida: ");
distancia = leia.questionFloat();

//Saída dos Dados
console.log("\nBom dia, " + nome);
console.log("\nA distância percorrida em sua corrida foi de: " + distancia);

// Sorteio simples 1 até 20
const prompt = require("prompt-sync")();
let result = 18;
let userInput = Number(prompt("Chute um número de 1 a 20: "));

while (userInput !== result) {
  userInput = Number(prompt("Tente outra vez: "));
}
console.log("Parabéns! Você acertou!");

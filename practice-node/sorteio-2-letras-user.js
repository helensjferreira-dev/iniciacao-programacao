// Usando a lib prompt-sync e validação

const prompt = require("prompt-sync")();
let result = "oi";
let userInput = String(prompt("Digite 2 letras e adivinhe: ")).trim();


  while (userInput !== result) {
    if (!/^[a-z]{2}$/.test(userInput)){
        console.log("Digite exatamente 2 letras válidas!")
    }
    userInput = String(prompt("Tente outra vez: ")).trim();
  }
  console.log("Parabéns! Você acertou!");
  


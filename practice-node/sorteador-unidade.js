// //Sem validações
// let resultNumber = 5;
// let message = "";

// function sorteadorUnidade(userInput) {
//   convUserInput = Number(userInput);

//   if (convUserInput !== resultNumber) {
//     result = null;
//     msg = "Número errado";
//   } else {
//     msg = "Parabéns, vc acertou!";
//   }
//   return {
//     result: resultNumber,
//     message: msg,
//   };
// }

// console.log(sorteadorUnidade(8));

// Com Validação

let resultNumber = 5;
let message = "";

function sorteadorUnidade(userInput) {
  convUserInput = Number(userInput);

  // let isNotValidUserInput = convUserInput < 1 || convUserInput > 9;
  let isValidUserInput = /[1-9]/.test(convUserInput);

  if (!isValidUserInput) { // se ñ for um valor valido, a fç ja acaba aqui retornando um valor
    return {
    result: null,
    message: "São aceitos números válidos de 1 a 9"
    }
  }

  if (convUserInput !== resultNumber) { // nova verificação
    result = null;
    msg = "Número errado";
  } else {
    msg = "Parabéns, vc acertou!";
  }
  return {
    result: resultNumber,
    message: msg,
  };
}

console.log(sorteadorUnidade("7"));
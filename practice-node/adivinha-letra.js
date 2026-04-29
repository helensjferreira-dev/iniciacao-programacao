// Transformando em uma função com string para facilitar a logica

let wordAlphabet = "a";

function sorteador(userInput) {
  let isUserInputValid = userInput.length === 1

  if (!isUserInputValid) {
    return {
      result: null,
      message: "Digite apenas 1 letra válida",
    }
  }
  let msg = ""
  let result = null

  if (userInput !== wordAlphabet) {
    msg = "Letra errada!"
  } else {
    msg = "Parabéns, vc acertou!"
    result = userInput
  }

  return {
    result: result,
    message: msg,
  }
}
console.log(sorteador("b"))
console.log(sorteador("a"))



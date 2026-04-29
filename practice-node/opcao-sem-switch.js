// Outra ideia de fazer menu sem switch:

const prompt = require("prompt-sync")();

function teclaEnter() {
  prompt("Digite enter para continuar...");
}
function menu(){
  console.log(" MENU A LA CARTE ");
  console.log("1. Macarrão a carbonara ");
  console.log("2. Lasanha a bolonhesa ");
  console.log("3. Choripan ");
  console.log("4. Sair ");
}

const acoes = { // usa chave:valor cada um uma função
  1: () => console.log("Saindo Macarrão..."),
  2: () => console.log("Saindo Lasanha..."),
  3: () => console.log("Saindo Choripan..."),

}

let opcao = "";
do {
    menu();
    opcao = Number(prompt("Escolha o seu prato: "));
    
    if (acoes[opcao]) {
  acoes[opcao]();
  
} else if (opcao === 4) {
  console.log("Obrigado pela sua visita!");
} else {
  console.log("Opção inválida!");
}
    if (opcao !== 4) teclaEnter(); 
} while (opcao !== 4);

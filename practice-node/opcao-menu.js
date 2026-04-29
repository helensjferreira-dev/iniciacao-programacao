const prompt = require("prompt-sync")();
function teclaEnter() {
  prompt("Digite enter para continuar...");
}

// DO WHILE
let opcao = "";

do {
  console.log(" MENU A LA CARTE ");
  console.log("1. Macarrão a carbonara ");
  console.log("2. Lasanha a bolonhesa ");
  console.log("3. Choripan ");
  console.log("4. Sair ");

  opcao = Number(prompt("Escolha o seu prato: "));

  switch (opcao) {
    case 1:
      console.log("Saindo um Macarrão delicioso...");
      break;
    case 2:
      console.log("Saindo uma Lasanha a bolonhesa saborosa...");
      break;
    case 3:
      console.log("Saindo um Choripan apetitoso...");

      break;
    case 4:
      console.log("Obrigado pela sua visita!");
      break;
    default:
      console.log("Opção inválida!");
  }
  if (opcao !== 4) {
    teclaEnter();
  }
} while (opcao !== 4);

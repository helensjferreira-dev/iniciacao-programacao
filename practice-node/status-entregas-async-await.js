// Busca status de uma entrega em uma base de dados por código

const codigosEntrega = ["BR123", "BR456", "BR789", "BR000"];

const statusEntrega = {
  BR123: "Em separação",
  BR456: "Em transporte",
  BR789: "Entregue",
  BR000: "Pedido cancelado",
};

function consultarEntregaPorCodigo(codigo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (statusEntrega[codigo]) {
        resolve(statusEntrega[codigo]);
      } else {
        reject("Código de rastreio não encontrado");
      }
    }, 2000);
  });
}

async function buscarEntregas(codigo) {
  console.log("Buscando...");

  try {
    const resultado = await consultarEntregaPorCodigo(codigo);

    console.log(`Status: ${resultado}`);

    console.log("Monitoramento concluído");
  } catch (erro) {
    console.error(`Erro: ${erro.message}`);
  }
}

// Consulta status por código:
buscarEntregas("BR789");

// Monitoramento de  Status de Entregas

function consultarEntrega(codigo) {
  return new Promise((result, reject) => {
    setTimeout(() => {
      switch (codigo) {
        case "BR123":
          result("Em separação");
          break;
        case "BR456":
          result("Em transporte");
          break;
        case "BR789":
          result("Entregue");
          break;
        case "BR000":
          result("Pedido cancelado");
          break;
        default:
          reject(new Error(`Código inválido ${codigo}`));
      }
    }, 2000);
  });
}

async function monitorarEntregas() {
  for (const item of codigosEntrega) {
    try {
      const status = await consultarEntrega(item);
      console.log(`Código: ${item}`);
      console.log(`Status: ${status}`);
      console.log(`#-----------------------------#`);
    } catch (erro) {
      console.log(`Código: ${item}`);
      console.error(`Erro: ${erro}`);
      console.log(`#-----------------------------#`);
    }
  }
  console.log("Monitoramento concluído");
}

// Chamada Ver status das entregas
monitorarEntregas();

// Exercitando POO em Javascript  (herança)

// Criar classe Pai
class Funcionario {
  constructor(nome, salarioBase) {
    this.nome = nome;
    this._salarioBase = salarioBase;
  }
  // Métodos da Super Classe
  calcularSalario() {
    throw Error('"calcularSalario()" deve ser implementado pela subclasse.');
  }
  descrever() {
    return `Funcionário: ${this.nome}`;
  }
}
// Subclasse
class FuncionarioCLT extends Funcionario {
  constructor(nome, salarioBase) {
    super(nome, salarioBase);
    this._valeRefeicao = 600;
  }

  // Sobrescrevendo métodos da Super Classe
  calcularSalario() {
    const inss = this._salarioBase * 0.11;
    const irrf = this._salarioBase * 0.15;
    return this._salarioBase - inss - irrf + this._valeRefeicao;
  }

  descrever() {
    const liquido = this.calcularSalario().toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return `CLT     | ${this.nome}     |  ${liquido}`;
  }
}

// Subclasse
class FuncionarioPJ extends Funcionario {
  constructor(nome, salarioBase) {
    super(nome, salarioBase);
  }

  calcularSalario() {
    const iss = this._salarioBase * 0.11;
    return this._salarioBase - iss;
  }
  descrever() {
    const liquido = this.calcularSalario().toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return `PJ      | ${this.nome}     |  ${liquido}`;
  }
}

// Subclasse
class Estagiario extends Funcionario {
  constructor(nome, bolsaAuxilio) {
    super(nome);
    this._bolsaAuxilio = bolsaAuxilio;
    this._auxilioTransporte = 200;
  }

  calcularSalario() {
    return this._bolsaAuxilio + this._auxilioTransporte;
  }
  descrever() {
    const liquido = this.calcularSalario().toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return `Estágio | ${this.nome}   | ${liquido}`;
  }
}
// Classe
class Empresa {
  constructor(nome) {
    this.nome = nome;
    this.funcionarios = [];
  }
  adicionarFuncionario(...funcionario) {
    //this.funcionarios.push(funcionario);
    this.funcionarios.push(...funcionario);
  }
  listarFuncionarios() {
    let totalPagamentos = 0;

    console.log("********** FOLHA DE PAGAMENTO ***********");
    console.log(`\nEMPRESA: ${this.nome}`);
    console.log("-----------------------------------");

    this.funcionarios.forEach((funcionario) => {
      console.log(funcionario.descrever());
      totalPagamentos += funcionario.calcularSalario();
    });
    console.log("");
    console.log(`Total de funcionários: ${this.funcionarios.length}`);

    console.log(
      `Valor Total da Folha de Pagamento: ${totalPagamentos.toLocaleString(
        "pt-BR",
        {
          style: "currency",
          currency: "BRL",
        },
      )}`,
    );
  }
}
// Consumir as classes Funcionarios
const funcionarioCLT1 = new FuncionarioCLT("Hélen", 6000);
console.log(funcionarioCLT1.descrever());

const funcionarioPJ1 = new FuncionarioPJ("Sofia", 10000);

console.log(funcionarioPJ1.descrever());

const estagiario1 = new Estagiario("Municke", 15000);

console.log(estagiario1.descrever());
console.log("");

// Criando a empresa
const empresa1 = new Empresa("Avanço Tecnologia");

// Adicionando Funcionarios à empresa
empresa1.adicionarFuncionario(funcionarioCLT1, funcionarioPJ1, estagiario1);
//empresa1.adicionarFuncionario(funcionarioPJ1);
//empresa1.adicionarFuncionario(estagiario1);

// Listar Funcionarios
empresa1.listarFuncionarios();

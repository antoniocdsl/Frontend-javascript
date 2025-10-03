// Questão 1
const BtnFuncional = document.getElementById('computar');
alert("Questão 1: O botão '" + BtnFuncional.id + "' está funcionando");

// Questão 2
function CalcularArea(fundamento, elevacao) {
    return (fundamento * elevacao) / 2;
}

let botao = document.getElementById('computar');
let inputBase = document.getElementById('fundamento');
let inputAltura = document.getElementById('elevacao');
let resultado = document.getElementById('saida');

botao.onclick = function() {
    let fundamento = Number(inputBase.value);
    let elevacao = Number(inputAltura.value);

    let area = CalcularArea(fundamento, elevacao);

    resultado.innerText = "A área do triângulo é: " + area;
};

// Questão 3
function ParOuNao(valor) {
    return valor % 2 === 0;
}

let botaoVerificar = document.getElementById("analisar");
let inputNumero = document.getElementById("valorDigitado");
let resultadoVerify = document.getElementById("saidaAnalise");

botaoVerificar.onclick = function() {
    let numero = Number(inputNumero.value);

    if (ParOuNao(numero)) {
        resultadoVerify.innerText = "O número " + numero + " é par";
    } else {
        resultadoVerify.innerText = "O número " + numero + " é ímpar";
    }
};

// Questão 4
const botaoMaior = document.getElementById('compararValores');
const inputNum1 = document.getElementById('valor1');
const inputNum2 = document.getElementById('valor2');
const inputNum3 = document.getElementById('valor3');
const resultadoMaior = document.getElementById('maiorResultado');

botaoMaior.onclick = function() {
    const n1 = Number(inputNum1.value);
    const n2 = Number(inputNum2.value);
    const n3 = Number(inputNum3.value);

    let maior = n1;
    if (n2 > maior) maior = n2;
    if (n3 > maior) maior = n3;

    resultadoMaior.innerText = "O valor maior é: " + maior;
};

// Questão 5
const TempCelcius = document.getElementById('temperaturaC');
const botaoFahrenheit = document.getElementById('converterF');
const resultadoFahrenheit = document.getElementById('saidaFahrenheit');

botaoFahrenheit.onclick = function() {
    const c = Number(TempCelcius.value);
    const temperatura = (c * 9 / 5) + 32;

    resultadoFahrenheit.innerText = "O resultado é " + temperatura + "!";
};

// Questão 6
const inputCapital = document.getElementById('valorInicial');
const inputJuros = document.getElementById('taxa');
const inputTempo = document.getElementById('duracao');
const resultadoMontante = document.getElementById('saidaMontante');

function Retorno() {
    const capitalInvest = Number(inputCapital.value);
    const juros = Number(inputJuros.value) / 100;
    const tempo = Number(inputTempo.value);

    const montante = capitalInvest * (1 + juros) ** tempo;

    resultadoMontante.innerText = "O resultado é: R$" + montante.toFixed(2) + "!";
}

// Questão 7
function divisivelPor3(numero) {
    return numero % 3 === 0;
}

function verificarDivisao() {
    const numero = Number(document.getElementById('valorDivisao').value);
    const resultado = document.getElementById('veredito');

    if (divisivelPor3(numero)) {
        resultado.innerText = `O número ${numero} é divisível por 3.`;
    } else {
        resultado.innerText = `O número ${numero} NÃO é divisível por 3.`;
    }
}

// Questão 8
function Mes() {
    const numeromes = Number(document.getElementById('numeroMes').value);
    const saidames = document.getElementById('nomeMes');

    const meses = [
        "janeiro", "fevereiro", "março", "abril",
        "maio", "junho", "julho", "agosto",
        "setembro", "outubro", "novembro", "dezembro"
    ];
    if (numeromes < 1 || numeromes > 12) {
        saidames.innerText = "Número inválido! Digite um número de 1 a 12.";
    } else {
        saidames.innerText = "O mês correspondente é: " + meses[numeromes - 1];
    }
}

// Questão 9
function calcularsalario() {
    const salarioatual = Number(document.getElementById('renda').value);
    let salarioComajuste = document.getElementById('rendaCorrigida');

    let percentual;

    if (salarioatual <= 280) {
        percentual = 20;
    } else if (salarioatual > 280 && salarioatual < 701) {
        percentual = 15;
    } else if (salarioatual > 700 && salarioatual < 1501) {
        percentual = 10;
    } else {
        percentual = 5;
    }

    const valorAumento = salarioatual * (percentual / 100);
    const novoSalario = salarioatual + valorAumento;

    salarioComajuste.innerText =
        `Salário antigo: R$ ${salarioatual.toFixed(2)}
Percentual: ${percentual}%
Aumento: R$ ${valorAumento.toFixed(2)}
Novo salário: R$ ${novoSalario.toFixed(2)}`;
}

// Questão 10
function calcularCombustivel() {
    const dinheiro = Number(document.getElementById('quantia').value);
    const resultado = document.getElementById('respostaEconomia');

    const precoLitro = 5;
    const kmPorLitro = 20;

    const litros = dinheiro / precoLitro;
    const distancia = litros * kmPorLitro;

    resultado.innerText =
        `Dá para: ${litros.toFixed(2)} litros de combustível e andar ${distancia.toFixed(2)} km.`;
}

// Questão 11
function calcularTempo() {
    const Tempo = Number(document.getElementById('tempoMinutos').value);
    const printresultado = document.getElementById('tempoConvertido');

    let Horas = Tempo / 60;
    let Dias = Tempo / 1440;

    printresultado.innerText = `${Tempo} minutos é equivalente à ${Horas.toFixed(2)} Horas e à aproximadamente ${Dias.toFixed(0)} Dias`;
}

// Questão 12
function Calculargorjeta() {
    const Conta = Number(document.getElementById('valorConta').value);
    const resultadogorjeta = document.getElementById('valorGorjeta');

    let valorgorjeta = Conta * 0.1;
    let contatotal = valorgorjeta + Conta;

    resultadogorjeta.innerText = `Valor da Gorjeta: R$ ${valorgorjeta.toFixed(2)}\nValor Total: R$ ${contatotal.toFixed(2)}`;
}

// Questão 13
function verificarEmprestimo() {
    const salario = Number(document.getElementById('rendaSolicitante').value);
    const prestacao = Number(document.getElementById('valorParcela').value);
    const resultadoemprestimo = document.getElementById('avaliacaoEmprestimo');

    if (prestacao > salario * 0.2) {
        resultadoemprestimo.innerText = "Empréstimo não pode ser concedido.";
    } else {
        resultadoemprestimo.innerText = "Empréstimo pode ser concedido.";
    }
}

// Questão 14
function calcularDescontoPrevidenciario() {
    const salario = Number(document.getElementById('rendaContribuinte').value);
    const resultado = document.getElementById('valorDesconto');

    let desconto = salario * 0.11;

    if (desconto > 334.29) {
        desconto = 334.29;
    }

    resultado.innerText = `Desconto: R$ ${desconto.toFixed(2)}`;
}

// Questão 15
function calcularRendimentoPoupanca() {
    const deposito = Number(document.getElementById('valorAplicado').value);
    const resultado = document.getElementById('rendimentoFinal');

    const rendimento = deposito * 0.007;
    const total = deposito + rendimento;

    resultado.innerText = `Valor inicial: R$ ${deposito.toFixed(2)}\nRendimento: R$ ${rendimento.toFixed(2)}\nTotal após 1 mês: R$ ${total.toFixed(2)}`;
}

/*/ Declarando as variáveis
var nome = "Gabriel";
var sobrenome = "Sousa";
var anoAtual = 2024;
var idade = 27;

// Concatenando nome e sobrenome
var nomeCompleto = nome + " " + sobrenome;

// Calculando o ano de nascimento
var anoNascimento = anoAtual - idade;

// Exibindo os resultados no console
console.log("Nome completo:", nomeCompleto);
console.log("Ano de nascimento:", anoNascimento);*/

/*var numero1 = prompt("Digite um número de 1 a 5");
var numeroInt1 = parseInt(numero1);

if (numeroInt1 < 1 || numeroInt1 > 5) {
    alert("O número escolhido está fora do intervalo permitido");
} else if (numeroInt1 == 1) {
    alert("Você escolheu o número um");
} else if (numeroInt1 == 2) {
    alert("Você escolheu o número dois");
} else if (numeroInt1 == 3) {
    alert("Você escolheu o número três");
} else if (numeroInt1 == 4) {
    alert("Você escolheu o número quatro");
} else if (numeroInt1 == 5) {
    alert("Você escolheu o número cinco");
}*/

/*var n = 1; 
while (n <= 3) { 
function calculaPar() {
    while (n <= 3) { 
        var numero1 = prompt("Digite um número");
        var numeroInt1 = parseInt(numero1);

        if (numeroInt1 % 2 == 0) {
            alert("Você escolheu um número par");
        } else {
            alert("Você escolheu um número ímpar");
        }

        n = n + 1;  
    }
}

calculaPar();*/




/*
function analisaNum(numeroInt1, numeroInt2) {
    var mensagem;
    if (numeroInt1 < numeroInt2) {
        mensagem = "O primeiro número é menor que o segundo";
    } else if (numeroInt1 > numeroInt2) {
        mensagem = "O primeiro número é maior que o segundo";
    } else if (numeroInt1 === numeroInt2) {
        mensagem = "O primeiro número é igual ao segundo";
    }
    return mensagem;
}

function subtraiNum(numeroInt1, numeroInt2) {
    var resultado = numeroInt1 - numeroInt2;
    return resultado;
}

var numero1 = prompt("Digite o primeiro número");
var numeroInt1 = parseInt(numero1);
var numero2 = prompt("Digite o segundo número");
var numeroInt2 = parseInt(numero2);

var mensagem = analisaNum(numeroInt1, numeroInt2);
var resultado = subtraiNum(numeroInt1, numeroInt2);

alert(mensagem + " e a subtração do primeiro pelo segundo é: " + resultado);*/

/*
function analisaNum(numeroInt1, numeroInt2) {
    var mensagem;
    if (numeroInt1 < numeroInt2) {
        mensagem = "O primeiro número é menor que o segundo";
    } else if (numeroInt1 > numeroInt2) {
        mensagem = "O primeiro número é maior que o segundo";
    } else if (numeroInt1 === numeroInt2) {
        mensagem = "O primeiro número é igual ao segundo";
    }
    return mensagem;
}


var numero1 = prompt("Digite o primeiro número");
var numeroInt1 = parseInt(numero1);
var numero2 = prompt("Digite o segundo número");
var numeroInt2 = parseInt(numero2);

var subtrair = (numeroInt1, numeroInt2) => numeroInt1 - numeroInt2;

var mensagem = analisaNum(numeroInt1, numeroInt2);
var subtracao = resultado(numeroInt1, numeroInt2);

alert(mensagem + " e a subtração do primeiro pelo segundo é: " + subtracao);*/

var nome = prompt("Qual é seu nome?")
var idade = prompt("Qual é sua idade?")

if (idade<18) {
    alert(nome+", você é menor de idade!")
}else {
    alert(nome+", você é maior de idade!")
}
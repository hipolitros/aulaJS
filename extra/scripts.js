// faca um programa que dado que a pessoa tem 25 anos, responda se ela nasceu antes de 1980;

// 

// let a = 25 + 1 > 25 - 1 && 2 * 10 + 5 == 24 + 1;

// a = 26 > 24 && 25 == 25;
// a = true &&  true;
// a = true;

// Faça um programa que, dada as entradas com nome e ano de nascimento, responda se o usuário tem entre 18 e 60 anos e se chama João ou Maria.

// const anoNascimento = prompt('Qual seu ano de nascimento?');
// const nome = prompt('Qual seu nome?');
// const anoCorrente = (new Date()).getFullYear();
// const idade = anoCorrente - anoNascimento;
// const welcomeMessage = document.getElementById('welcome-message');
// const messageDefault = welcomeMessage.innerText;
// if (idade >= 18 && idade <= 60) {
//     console.log('Usuário tem entre 18 e 60 anos');
// }

// if (nome == 'João' || nome == 'Maria') {
//     welcomeMessage.innerText = messageDefault + ', eu me chamo ' + nome + ' e tenho ' + idade + ' anos';
// } else {
//    welcomeMessage.innerText = messageDefault + ", eu nao posso dizer quem eu sou!";
// }



// //Faça um programa que, dada a idade do usuário em anos, calcule quantas horas ele viveu, aproximadamente.

// // const meses = idade * 12;
// // const dias = (meses * 30) + (meses/2); // Metade dos meses tem 31 dias
// // const horas = dias * 24;

// // welcomeMessage.innerText = welcomeMessage.innerText + ' Eu vivi ' + horas.fo + ' horas até hoje desde que eu nasci.';

// João comprou uma quantidade de balas para ele e seus amigos. A quantidade de balas que ele comprou é maior que a quantidade de amigos, mas não há como dividí-las igualmente. Faça um programa que, dada as quantidades de balas pelo usuário, calcule quantas balas faltam para que a divisão fique igual entre os amigos.

// const qtdBalas = prompt('Quantas balas você tem?'); 
// const qtdAmigos = prompt('E vai dividir com quantos amigos?'); 

// const balasFaltantes = qtdBalas % qtdAmigos; 

// const pElement = document.createElement('p');
// const pText = document.createTextNode('Faltam ' + balasFaltantes + ' balas!');
// pElement.appendChild(pText);
// document.body.appendChild(pElement);

//Altere o resultado do exercicio anterior para o que segue:
// Se quantidade de balas e amigos forem iguais, escrever "Todos vao receber a mesma quantidade" caso contrário informar quantas balas ainda faltam para todos ficarem com a mesma quantidade

// const pElement = document.createElement('p');
// let pText;
// if (balasFaltantes) {
//     pText = document.createTextNode('Faltam ' + balasFaltantes + ' balas!');
// } else {
//     pText = document.createTextNode('Todos receberam a mesma quantidade de balas!');
// }

// pElement.appendChild(pText);
// document.body.appendChild(pElement);

// Dado a idade de uma pessoa, classifique-a conforme abaixo:
// Se menor de 12 anos, informar que é criança
// Maior de 12 anos e menor que 14 anos, pré-adolescente
// Maior de 14 anos e menor que 18 anos, adolescente
// Menor que 60 anos, adulto
// Mais que 60 anos, idoso

// const idade = prompt('Qual a sua idade?');
// let pText = 'Idade não informada!';
// if (idade < 12) {
//     pText = 'você é criança!';
// } else if (idade >= 12 && idade <= 14) {
//     pText = 'você é pré-adolescente!';
// } else if (idade > 14 && idade <= 18) {
//     pText = 'você é adolescente!';
// } else if (idade > 18 && idade <= 60) {
//     pText = 'você é adulto!';
// } else {
//     pText = 'você é idoso!';
// }

// const pElement = document.createElement('p');
// pElement.innerText = pText;
// document.body.appendChild(pElement);

//Desenvolva um programa que calcule o IMC (índice de massa corpórea) e responda qual é a situação da pessoa. Procure na internet pelo cálculo e pelas faixas de IMC. 
// const pElement = document.createElement('p');
// const peso  = prompt('Qual seu peso?');
// const altura = prompt('Qual sua altura?');

// const imc = peso/(altura * altura);

// if (imc < 18) {
//     pElement.innerText = ' Você está abaixo do peso!';
// } else if ( imc < 25) {
//     pElement.innerText = 'Você está com peso normal!';
// } else {
//     pElement.innerText = 'Você está acima do peso!';
// } 
// document.body.appendChild(pElement);

//A montagem de uma placa necessita de 2 componentes do tipo A, 3 do tipo B e 7 do tipo C. Faça um programa que receba as quantidades de cada componente e responda quantas placas podem ser montadas no máximo.

// const materialA = prompt('Quantidade de componentes A');
// const materialB = prompt('Quantidade de componente B');
// const materialC = prompt('Quantidade do componente C');

// const placasA = materialA/2;
// const placasB = materialB/3;
// const placasC = materialC/7;

// let maximo = placasA;

// if (placasB < maximo) {
//     maximo = placasB;
// }

// if (placasC < maximo) {
//     maximo = placasC;
// }
// maximo = Math.trunc(maximo);
// const pElement = document.createElement('p');
// pElement.innerText = `Com esta quantidade pode-se fazer ${maximo} placas`;
// document.body.appendChild(pElement);

//Um banco precisa que cada cliente tenha uma senha de 4 dígitos, sendo que todos dígitos devem ser diferentes de ‘0’. Faça um programa que receba a senha e verifique se a senha é válida.

// const senha = prompt('Digite sua senha');
// let eValida = true;

// eValida = (senha.length === 4);
// // eValida = !(senha.indexOf('0') > -1);
// eValida = !senha.includes('0');

// const pElement = document.createElement('p');

// if(eValida) {
//     pElement.innerText = 'Senha válida!';
// } else {
//     pElement.innerText = 'Senha inválida!';
// }
// document.body.appendChild(pElement);

/* 
se senha maior/menor que 4 e senha contem 0, mensagem invalida
se senha maior/menor que 4 e senha não contem 0, mensagem invalida
se senha igual a 4 e senha contem 0, mensagem invalida
se senha igual a 4 e senha não contem 0, mesagem valida 
*/
/* 
Se (senha maior/menor que 4 e senha contem )
    mensegem invalida
senao se (senha maior/menor que 4 e senha não contem 0) 
    mensagem invalida
senao se (se senha igual a 4 e senha contem 0, mensagem) 
    mensagem invalida
senao 
    mensagem valida
 */
if (senha.length !== 4 && senha.includes('0')) {
    console.log('senha invalida');
} else if (senha.length !== 4 && !senha.includes('0')) {
    console.log('senha invalida');
} else if (senha.length === 4 && senha.includes('0')) {
    console.log('senha invalida');
} else {
    console.log('senha valida');
}

if (senha.length !== 4 ) {
    console.log('senha invalida');
} else if (senha.includes('0')) {
    console.log('senha invalida');
} else {
    console.log('senha valida');
}
// Arrow Function
// const isNumeric = (string) => {
//     const onlyString  = /^[0-9]+$/;
//     return (onlyString.test(string));
// }

//Function tradicional
function isNumeric(string) {
    const regexParaSomenteNumeros  = /^[0-9]+$/;
    return (regexParaSomenteNumeros.test(string));
}

if (isNumeric(senha)) {
    console.log('Senha inválida, somente números');
} else if ((senha.length !== 4 && senha.includes('0')) || (senha.length !== 4 && !senha.includes('0')) || (senha.length === 4 && senha.includes('0'))) {
    console.log('senha invalida');
} else {
    console.log('senha valida');
}

if ((senha.length !== 4 && (senha.includes('0') || !senha.includes('0')) ) || (senha.length === 4 && senha.includes('0'))) {
    console.log('senha invalida');
} else {
    console.log('senha valida');
}

// Dado um numero qualquer verificar se o mesmo é par ou impar se numero for maior que 10 e menor que 100 verificar se é divisivel por 10, se impar verificar se é divisel por 9.

const ePar = (x) => {
// const ultimaPosicao = x.toString().charAt(x.toString().length - 1);
// const ultimaPosicao = x % 10;
// Um numero e par  quando termina em 0, 2,4,6 e 8
    // if ([0,2,4,6,8].includes(parseInt(ultimaPosicao))) {
    //     return true;
    // }
    // return false;

    // if (x % 2 === 0) {
    //     return true;
    // }

    // return false;

    return (x % 2 === 0)? true : false;
}

const estaEntreDezECem = x => (x >= 10 && x <= 100)? true : false;

const eDivisivelPorDezOriginal = (x) => {
    // if (divisao === 0) {
    //     return true;
    // }
    // return false;

    // return (x % 10 === 0)? true : false;
    return (x % 10 === 0);
}

const eDivisivelPorDez = x => (x % 10 === 0);

let message;

if (ePar(29)) {
    message = 'O número 29 é par';
} else {
    message = 'O número 29 é impar';
}

let parOuImpar = ePar(29)? 'par' : 'ímpar';

message = `O número 29 é ${parOuImpar}`;

if (estaEntreDezECem(29)) {
    // verifia se é divisel por 10
} else {
    // verifica se é divisil por 9
}

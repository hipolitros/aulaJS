/* 
let idade = prompt('Qual a sua idade?');
const anoBase = 1980;
const anoCorrente = (new Date()).getFullYear();
let anoNascimento = anoCorrente - idade;

if (anoCorrente < anoBase) {
		console.log('Ela nasceu antes de 1980');
}	else {
	console.log('Ela nasceu em/ou pós 1980');
} */


// O usuário tem 18 ou 60 anos e se chama joão ou Maria

/* 
const nome = prompt('Qual o seu nome?');
const anoNascimento = prompt('Qual o seu ano de nascimento?');
const anoBase = (new Date()).getFullYear();
const idade = anoBase - anoNascimento;

if (idade >= 18 && idade <= 60) {
        console.log('Usuario tem entre 18 e 60 anos.');
        console.log(idade);
}	else {
	console.log('Usuario tem menos de 18 ou mais que 60 anos');
	console.log(idade);
}

if (nome == 'João' || nome == 'Maria') {
        console.log('O usuario se chama João ou Maria');
}       else {
        console.log('O usuario não se chama João e nem Maria');
	console.log(nome + ' É != João && Maria');
}
 */

// Faça um programa que dada a idade do usuario em anos, calcule quantas horas ele viveu, aproximadamente.

/* 
const idade = prompt('Qual a sua idade?');
const dias = idade * 365;
const horas = dias * 24;
const minutos = horas * 60;
const segundos = minutos * 60;

if (idade > 0) {
        console.log('O usuario viveu ' + idade + ' Anos, ' + dias + ' Dias, ' + horas + ' Hs, ' + minutos + ' m, ' + segundos + ' s.')
} 
*/

// João comprou uma quantidade de balas para ele e seus amigos. A quantidade de balas que ele comprou é maior que a quantidade de amigos, mas não há como dividi-las igualmente. Faça um programa que, dada as quantidades de balas pelo usuário, calcule quantas faltam para que a divisão fique igual entre os amigos.

/* const balas = prompt('Quantas balas?');
const amigos = prompt('Quantos amigos?');
const balasQueFaltam = balas % amigos;

if (balasQueFaltam > 0) {
        console.log('Falta ' + balasQueFaltam + ' balas');
        console.log(balas + ' Balas');
        console.log(amigos + ' Amigos');
} else {
        console.log('Todos vao receber a mesma quantidade');
} */


//Altere o resultado do exercicio anterior para o que segue: Se quantidade de balas e amigos forem iguais, escrever "Todos vao receber a mesma quantidade" caso contrário informar quantas balas ainda faltam para todos ficarem com a mesma quantidade.

/* const idade = prompt('Qual sua idade?'); */

//Calcurar IMC do usuario

/* let altura = prompt('Qual a sua altura?');
let peso = prompt('Qual o seu peso?');
let calculoAltura = altura * altura;
let imc = peso / calculoAltura;

if (imc < 18) {
    console.log('Esta abaixo do peso.');
} else if (imc >= 18 && imc <= 24) {
    console.log('Esta com o peso normal.');
} else if (imc >= 25 && imc <= 29) {
    console.log('Esta com sobre peso.');
} else {

} */

//2 componentes do tipo A, 3 do tipo B e 7 do C. Quantas placas pode ser montadas no maximo?

/* const componenteA = prompt('Quantos componentes A?');
const componenteB = prompt('Quantos componentes B?');
const componenteC = prompt('Quantos componentes C?');

const placaA = componenteA/2;
const placaB = componenteB/3;
const placaC = componenteC/7;

let maximo = placaA

if (placaB < maximo){
    maximo = placaB;
}

if (placaC < maximo) {
    maximo = placaC;
}

maximo = Math.trunc(maximo);
const pElemente = document.createElement('p');
pElemente.innerText = `Com esta quantidade pode-se fazer ${maximo} placas!`;
document.body.appendChild(pElemente); */

//Um banco precisa que cada cliente tenha uma senha de 4 digitos, sendo que todos digitos devem ser diferentes que '0'. Faça um programa que receba a senha e verifique se a senha é valida.

/* const senha = prompt('Digite sua senha aqui.');
let mensagem;
if (senha.length !== 4) {
    console.log('Senha inválida!');
    mensagem = 'Senha inválida!';
}    else if (senha.includes('0')) {
    console.log('Senha inválida!') ;
    mensagem = 'Senha inválida!';
}    else {
    console.log('Senha válida!');
    mensagem = "Senha válida!";
}

const pElemente = document.createElement('p');
pElemente.innerText = mensagem;
document.body.appendChild(pElemente); */

//Dado um numero qualquer verificar se o mesmo é par ou impar se numero for maior que 10 e menor que 100 verificar se é divisivel por 10, se impar verificar se é divisel por 9.

const numero = prompt('Insira um número aqui.');
let mensagem;

/* 
function ePar(numero) {
    const verificar = numero.toString().charAt(numero.toString().length - 1);
    if (verificar % 2 === 0) {
        return true;
    }
    return false;
} 


 
function eDivisivelPorDez(numero) {
    const divisivelDez = numero.toString().charAt(numero.toString().length - 1);
    if (divisivelDez === 0) {
        return true;
    }
    return false;
}

function eDivisivelPorNove(numero) {
    if (numero % 9 === 0) {
        return true;
    }
    return false;
}
*/

const ePar = numero => (numero % 2 === 0)? true : false; // verifica se é par ou impar
const eDivisivelPorDez = numero => (numero % 10 === 0)? true : false; // verifia se é divisel por 10
//const eDivisivelPorNove = numero => (numero % 9 === 0)? true : false; // verifica se é divisil por 9
const estaEntreDezECem = x => (x >= 10 && x <= 100)? true : false; // verifica se numero é maior que 10 e menor que 100 

function eDivisivelPorNove(numero) { 
    const separar = (""+numero).split("");
    const somar = separar.map(i => parseInt.apply(i)).reduce(total, itemCorrente => (total + itemCorrente));
    if (somar % 9 === 0) {
        mensagem += 'É divisivel por nove.';
    } 
} 

/* 
if (ePar(numero) && estaEntreDezECem(numero) && eDivisivelPorDez(numero)) {
      mensagem = 'É par, esta entre dez e cem e é divisivel por 10.';
} else {
    if (estaEntreDezECem(numero) && eDivisivelPorNove(numero)) {
        mensagem = 'É impar, esta entre dez e cem e é divisivel por 9.';
    }
}

if (ePar(numero)) {
    mensagem = 'É par.';
} else {
    mensagem = 'É impar.';
}

if (eDivisivelPorDez(numero)){
    mensagem = 'É divisivel por dez.';
} else {
    mensagem = 'Não é divisivel por dez.';
}

if (eDivisivelPorNove(numero)) {
    mensagem = 'É divisivel por nove.';
} else {
    mensagem = 'Não é divisivel por nove.';
}*/

if (ePar(numero)) { // verifica se é par ou impar
    mensagem = 'Ele é par.';
    if (estaEntreDezECem(numero)) { // verifica se numero é maior que 10 e menor que 100 
        mensagem += ' Esta entre dez e cem.';
        if (eDivisivelPorDez(numero)) { // verifia se é divisel por 10
            mensagem += ' É divisivel por 10.';
        } else {
            mensagem += ' Não é divisivel por 10.';
        } 
    }
} else {
    mensagem = 'É impar.';
    if (eDivisivelPorNove(numero)) { // verifica se é divisil por 9
        mensagem += ' E é divisivel por 9.';
    }
} 
const pElemente = document.createElement('p');
pElemente.innerText = mensagem;
document.body.appendChild(pElemente);






let numeroJogadorUm = 76;
let palpiteJogadorDois = 14;

do {
    palpiteJogadorDois + 1;
} while (palpiteJogadorDois === numeroJogadorUm) {
    console.log('')
}
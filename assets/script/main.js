/* let idade = prompt('Qual a sua idade?');
const anoBase = 1980;
const anoCorrente = (new Date()).getFullYear();
let anoNascimento = anoCorrente - idade;

if (anoCorrente < anoBase) {
		console.log('Ela nasceu antes de 1980');
}	else {
	console.log('Ela nasceu em/ou pós 1980');
} */


// O usuário tem 18 ou 60 anos e se chama joão ou Maria

/* const nome = prompt('Qual o seu nome?');
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

// Faça um programa que dada a idade do usuario em anos, 
//calcule quantas horas ele viveu, aproximadamente.

const idade = prompt('Qual a sua idade?');
const dias = idade * 365;
const horas = dias * 24;
const minutos = horas * 60;
const segundos = minutos * 60;

if (idade > 0) {
        console.log('O usuario viveu ' + idade + ' Anos, ' + dias + ' Dias, ' + horas + ' Hs, ' + minutos + ' m, ' + segundos + ' s.')
}
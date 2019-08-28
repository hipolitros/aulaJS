const numero = prompt('Insira um número aqui.');
let mensagem;
const ePar = numero => (numero % 2 === 0)? true : false; // verifica se é par ou impar
const eDivisivelPorDez = numero => (numero % 10 === 0)? true : false; // verifia se é divisel por 10
const eDivisivelPorNove = numero => (numero % 9 === 0)? true : false; // verifica se é divisil por 9
const estaEntreDezECem = x => (x >= 10 && x <= 100)? true : false; // verifica se numero é maior que 10 e menor que 100

if(ePar(numero)) { // verifica se é par ou impar
    mensagem = 'Ele é par.';
    if (estaEntreDezECem(numero)) { // verifica se numero é maior que 10 e menor que 100 
        mensagem += ' Esta entre dez e cem.';
        if (eDivisivelPorDez(numero)) { // verifia se é divisel por 10
            mensagem += ' É divisivel por 10.';
        } 
        else {
            mensagem += ' Não é divisivel por 10.';
        } 
    }
} 
else {
    mensagem = 'É impar.';
    if (eDivisivelPorNove(numero)) { // verifica se é divisil por 9
        mensagem += ' E é divisivel por 9.';
    }
} 
const pElemente = document.createElement('p');
pElemente.innerText = mensagem;
document.body.appendChild(pElemente);
// let numero = 1;

// while(numero <= 10) {
//     console.log(`\n${numero}`);
//     numero++;
// }

// while(numero > 1) {
//     numero--;
//     console.log(`\n${numero}`);
// }

// // numero = 1;

// console.log('\n------><------\n');
// do {
//     numero *= 2;
//     console.log(`\n${numero}`);
// } while (numero < 100);

// console.log(`Fim do programa`);

// /** Faca um programa que receba números do usuário até que ele digite 0 e entao, calcule a média aritmética. Lembrando que a média aritmética é a soma de todas as entradas divida pela quantidade de entradas;

// Ex> 1,6,7,8,0 a media arimética é (1 + 6 + 7 + 8)/4
// **/

// let entrada = [9,5,2,9,65,0];
// let media = 0;
// let tamanhoEntrada = entrada.length;
// let acumuladoAteEncontrarZero = 0;
// let posicao = 0;

// while (entrada[posicao] !== 0) {
//     media += entrada[posicao];
//     acumuladoAteEncontrarZero = posicao + 1;
//     posicao++;
// }

// media = media/acumuladoAteEncontrarZero;

// console.log(`A media aritimética é ${media}`);

/** Faca um jogo onde um jogador digita um numero e o outro jogador deve tentar advinhar este numero. Enquanto o segundo jogador não acertar o número, a mensagem "Você errou!" deve ser exibida até ele acertar. Se o jogador dois acertar o número você deve exibir a mensagem "Parabéns você acertou o número: [exibir numero]". */

// const numeroJogadorUm = 239;
// let palpiteJogadorDois = 239;

// do {
// 	if (palpiteJogadorDois < numeroJogadorUm) {
// 		palpiteJogadorDois += 1;
// 	}

// 	if (palpiteJogadorDois > numeroJogadorUm) {
// 		palpiteJogadorDois -= 1;
//     } 
    
// 	console.log('Você errou!');
// } while (numeroJogadorUm !== palpiteJogadorDois);

// if (palpiteJogadorDois === numeroJogadorUm) {
//     console.log(`Parabéns você acertou o número: ${palpiteJogadorDois}`);
// } else {
//     while(palpiteJogadorDois !== numeroJogadorUm) {
//         console.log('Você errou!');
//         console.log(`Voce digitou: ${palpiteJogadorDois}`);

//         if (palpiteJogadorDois > numeroJogadorUm ) {
//             palpiteJogadorDois = palpiteJogadorDois - 1;
//         } 
//         if (palpiteJogadorDois < numeroJogadorUm ){
//             palpiteJogadorDois = palpiteJogadorDois + 1;
//         }   
//     }
//     console.log(`Parabéns você acertou o número: ${palpiteJogadorDois}`);
// }

let semaforo = 'vermelho';
let mensagem = '';

switch (semaforo) {
    case 'vermelho':
        mensagem = 'Pare';
        break;
    case 'amarelo':
        mensagem = 'Atenção';
        break;
    case 'verde':
         mensagem = 'Passe';
         break;
}
console.log(mensagem);

// console.log(`Parabéns você acertou o número: ${palpiteJogadorDois}`);
// terminou o loop continua;

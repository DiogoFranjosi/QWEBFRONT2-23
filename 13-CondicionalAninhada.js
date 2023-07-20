media = 1;
console.log(`Sua média é de ${media} ponto(s) `);

if(media < 2){
    console.log("Você foi reprovado!");
} else if (media < 6) {
    console.log("Você está de recuperação");
} else if (media == 10) {
    console.log("Você atingiu a nota máxima, PARABÉNS!");
} else {
    console.log("Parabéns! Você foi aprovado");
}

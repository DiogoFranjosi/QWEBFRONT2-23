let nota1, nota2, nota3, nota4;

nota1 = 10;
nota2 = 7.5;
nota3 = 10;
nota4 = 10;

const media = (nota1 + nota2 + nota3 + nota4)/ 4;
console.log(`Sua média é: ${media.toFixed(1)}`);

if(media >=6){
    console.log("=== ALUNO APROVADO ===");
    console.log("=============================");
    console.log("PARABÉNS! BOAS FÉRIAS...");
} else {
    console.log("=== ALUNO REPROVADO ===");
    console.log("=============================");
    console.log("ESTUDE MAIS! BOAS FÉRIAS...");
}

// Operador ternário - (teste lógico?valor se verdadeiro?valor se falso) 
//console.log((media>=6?"ALUNO APROVADO\nPARABÉNS!":"ALUNO REPROVADO\nESTUDE MAIS!"));
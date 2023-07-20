const nota1 = 10;
const nota2 = 7.5;
const nota3 = 10;
const nota4 = 6.5;

console.log(CalcularMedia(nota1,nota2,nota3,nota4))

function CalcularMedia (n1, n2,  n3,  n4)
{
    try{
        const notaFinal = (n1 + n2 + n3 + n4)/ 4;
        return notaFinal.toFixed(1);
    }
    catch(e){
        console.log("Erro ao calcular a média. Tente novamente");
        console.log(e);
    }
}

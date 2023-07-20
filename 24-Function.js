const n1 = 10;
const n2 = 20;
const n3 = 30;
const n4 = 40;

console.log("--------------- S O M A ---------------")

somar(n1, n1);
somar(n1, n2);
somar(n1, n3);
somar(n1, n4);

console.log("---------------  M U L T I P L I C A Ç Ã O ---------------")

multiplicar(n1, n1);
multiplicar(n1, n2);
multiplicar(n1, n3);
multiplicar(n1, n4);

console.log("--------------- S U B T R A Ç Ã O ---------------")

subtrair(n1, n1);
subtrair(n1, n2);
subtrair(n1, n3);
subtrair(n1, n4);

console.log("--------------- D I V I S Ã O ---------------")

dividir(n1, n1);
dividir(n1, n2);
dividir(n1, n3);
dividir(n1, n4);

// Função sem retorno, onde não há uma devolutiva de valor nenhum
function somar(numero1, numero2) {
    const resultado = numero1 + numero2;
    console.log(`Os resultados das adições são: ${resultado}`);
}

function subtrair(numero1, numero2) {
    const resultado = numero1 - numero2;
    console.log(`Os resultados das subtrações são: ${resultado}`);
}

//Função com retorno, onde há uma devolutiva de algum cálculo ou valor
function multiplicar(numero1, numero2) {
    const resultado = numero1 * numero2;
    console.log(`Os resultados das multiplicações são: ${resultado}`);
}

function dividir(numero1, numero2) {
    const resultado = numero1 / numero2;
    console.log(`Os resultados das divisões são: ${resultado}`);
}

console.log("--------------- D A T A    A T U A L  ---------------")

console.log("Hoje é dia " + exibirDataAtual());

function exibirDataAtual(){
    const data = new Date();
    const hoje = data.getDate();
    const mes =  data.getMonth() + 1;
    const ano = data.getFullYear();
    
    const dataCompleta = hoje + "/" + mes + "/" + ano;
    return dataCompleta;

}
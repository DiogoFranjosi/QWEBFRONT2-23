let n1, n2, n3;
n1 = 30;
n2 = 30;
n3 = 30;

let maiorNumero;

if (n1 == n2 && n1 == n3){
    console.log(`Os números são iguais!`)
}
else if (n1 > n2 && n1 > n3) {
    console.log(`O maior número é: ${n1}`)
}
else if (n2 > n1 && n2 > n3) {
    console.log(`O maior número é: ${n2}`)
} else {
    console.log(`O maior número é: ${n3}`)
}
//Declaração da variável
let precoProtudo1, precoProtudo2, precoProtudo3;

//Atribuoção da variável
//Entrada de dados
precoProtudo1 = 9.99;
precoProtudo2 = 19.90;
precoProtudo3 = 42.30;

//Processamento
let valorTotal = precoProtudo1 + precoProtudo2 + precoProtudo3;

//Saída
//Template String
console.log(`Valor do produto 1: R$ ${precoProtudo1}`);
console.log(`Valor do produto 2: R$ ${precoProtudo2}`);
console.log(`Valor do produto 3: R$ ${precoProtudo3}`);
console.log("========================================================")
console.log(`O valor total de todos os produtos é de R$: ${valorTotal.toFixed(2)}`);
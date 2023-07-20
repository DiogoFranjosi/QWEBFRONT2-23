// Array - Arranjo de dados - Llista de valores
// Método pop - Adiciona um item ao final do Arrey
// Método pop - Remove o último item do final do Array
// Método Length - Mostra a quantidade ao início do Array
// Método unshift - Adiciona valores ao início da Array
// Método shift - Remove o primeiro item do Array
// Método indexOf - mostra o índice do valor mostrado dentro do Arrey
// Método splice(índice do item, quantidade para excluir) - Removo um item dentro do Array


let carros = ["Gol", "Celta Preto", "Fox", "Opala", "Ferrari", "Kia Soul"];

//console.log(carros.length);
//carros.push("MusTang");
//console.log(carros.length);
//carros.pop(carros.length);
//console.log(carros.length);

//carros.unshift("Logan", "Doblo");
//console.log(carros[0]);
//carros.shift();
//console.log(carros[0]);

console.log(carros[3]);

let itemParaExcluir = carros.indexOf("Opala");
carros.splice(itemParaExcluir, 1);

console.log(carros[3]);


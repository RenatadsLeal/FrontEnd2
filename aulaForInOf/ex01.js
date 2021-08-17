// for...in - itera sobre objetos literais

//ex01
let cachorro = {
    nome: "Meg",
    idade: 10,
    cor: "preto"
};

for (let propriedade in cachorro) {
    console.log(propriedade, cachorro[propriedade]);
};

// ex02 posição index de um array
let cores = ["Azul", "Verde", "Amarelo", "Branco"];
for (let index in cores) {
    console.log(index, cores[index])
};

//For...of - elemento iterável

//ex03 dobrando os números de um array
let nums = [2,4,6,8,10];
for(let num of nums) {
    num = num * 2
    console.log(num)
};

//ex 04 iterando sobre um array
let animais = ["cachorro","gato","papagaio","tartaruga"];
for (let animal of animais) {
    animal = animal + " é um animal"
    console.log(animal)
};

//ex05 iterando sobre uma string
let palavra = "UAU";
for (let letra of palavra) {
    console.log(letra);
};
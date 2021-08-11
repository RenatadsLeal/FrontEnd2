let notas = [10, 9, 8, 7];

let media = notas.reduce((acc, atual) => {
    let sum = acc + atual;
    console.log(`Soma: ${sum}`);
    return sum;
}, 0) / notas.length;

console.log(`A média é: ${media}`);

notas.forEach(e => {
    let mensagem;
    if (e > 7) { mensagem = `Parabéns pela conclusão do ${notas.indexOf(e) + 1}º bimestre. Sua nota foi: ${e}.`
}else {
    mensagem=`Comunicamos que você infelizmente foi reprovado no ${notas.indexOf(e) + 1}º bimestre.Sua nota foi: ${e}`
} 
console.log(mensagem)
});
/* Mesa de trabalho - Renata Leal
Programaremos um pequeno jogo de Pedra, Papel ou Tesoura. Neste jogo o usuário poderá escolher entre uma das três 
opções e o computador escolherá aleatoriamente uma das três opções, essas opções serão então comparadas e no final 
será mostrado quem ganhou e quem perdeu a disputa. Para fazer essa atividade é importante lembrar das regras básicas
deste jogo:

Pedra ganha de Tesoura.
Tesoura ganha de Papel.
Papel ganha de Pedra.

Após termos as regras e o sistema com uma partida do jogo, ficará ao encargo das mesas de trabalho:

Refatorar o código, utilizando funções e a estrutura de decisão switch;
Implementar uma regra de que só é declarado o ganhador do jogo após 3 rodadas, para auxiliar use uma variável para 
armazenar o vencedor de cada partida;
Comentar o código e utilizar de qualquer outro recurso para deixá-lo melhor formatado. */


// Variáveis para acumular os pontos das rodadas
let pontosUsuario = 0
let pontosMaquina = 0

// Loop para rodar o jogo 3 vezes
for (let rodadas = 0; rodadas < 3; rodadas++) {
    jogo();
    function jogo() {
        let respostaUsuario = prompt("Escolha pedra, papel ou tesoura!")

        let opcoes = ["pedra", "papel", "tesoura"];

        // Escolha aleatória da máquina
        let respostaMaquina = opcoes[Math.floor(Math.random() * opcoes.length)];

        // Função que compara as respostas do usuário e da máquina
        function vencedor(respostaUsuario, respostaMaquina) {
            if (respostaUsuario === "pedra" || respostaUsuario === "Pedra") {
                switch (respostaMaquina) {
                    case "pedra":
                        alert("A máquina escolheu pedra! Foi empate!")
                        break;
                    case "papel":
                        pontosMaquina++
                        alert("A máquina escolheu papel! Você perdeu!")
                        break;
                    case "tesoura":
                        pontosUsuario++
                        alert("A máquina escolheu tesoura! Você ganhou")
                        break;
                }
            } else if (respostaUsuario === "papel" || respostaUsuario === "Papel") {
                switch (respostaMaquina) {
                    case "pedra":
                        pontosUsuario++
                        alert("A máquina escolheu pedra! Você ganhou!")
                        break;
                    case "papel":
                        alert("A máquina escolheu papel! Foi empate!")
                        break;
                    case "tesoura":
                        pontosMaquina++
                        alert("A máquina escolheu tesoura! Você perdeu!")
                        break;
                }

            } else if (respostaUsuario === "tesoura" || respostaUsuario === "Tesoura") {
                switch (respostaMaquina) {
                    case "pedra":
                        pontosMaquina++
                        alert("A máquina escolheu pedra! Você perdeu!")
                        break;
                    case "papel":
                        pontosUsuario++
                        alert("A máquina escolheu papel! Você ganhou!")
                        break;
                    case "tesoura":
                        alert("A máquina escolheu tesoura! Foi empate!")
                        break;
                }
            } else {
                alert("Opção inválida!")
            }
        }
        vencedor(respostaUsuario, respostaMaquina);
    }
}

// ifs que comparam o total de pontos depois de 3 rodadas
if (pontosUsuario > pontosMaquina) {
    alert("Você ganhou! Parabéns!!!")
} else if (pontosUsuario < pontosMaquina) {
    alert("Ops, você perdeu!")
} else if (pontosUsuario === pontosMaquina) {
    alert("Parece que foi empate!")
}
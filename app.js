let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;
let listaNumerosSorteados = []

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {
        rate: 1.2
    });
}

exibirTextoNaTela('h1', 'Jogo do número secreto')
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')

function verificarChute() {
    let chute = document.querySelector('input').value;
    listaNumerosSorteados.push(chute);
    tentativas = listaNumerosSorteados.length;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!')
        let palavraTentativa = (tentativas > 1) ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativas)
        habilitarBotaoReset()
        console.log(listaNumerosSorteados);
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor')
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior')
        }
        limparCampo();
    }

}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}

function habilitarBotaoReset() {
    let botao = document.getElementById('reiniciar');
    botao.removeAttribute('disabled')
}

function reiniciarJogo() {
    location.reload()
}
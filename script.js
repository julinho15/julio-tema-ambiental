const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
    enunciado: "Como preservar o ambiente?",
    alternativas: ["Reciclando plásticos", "Jogando resíduos em rios"],
    },
    {
    enunciado: "Qual tipo de plástico é sustentável?",
    alternativas: ["Bioplásticos", "Plásticos de petróleo"],
    },
    {
    enunciado: "Qual alternativa não é uma causa do efeito estufa em excesso?",
    alternativas: ["Preservação de habitats", "Exploração de petróleo"],
    },
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (atual < perguntas.length) {
        const perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        mostraAlternativas(perguntaAtual.alternativas);
    } else {
        caixaPerguntas.textContent = '';
        caixaAlternativas.innerHTML = '';
        textoResultado.textContent = `Você respondeu todas as perguntas! Sua história: ${historiaFinal}`;
    }
}

function mostraAlternativas(alternativas) {
    caixaAlternativas.innerHTML = ''; // Limpa as alternativas anteriores
    alternativas.forEach(alternativa => {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        botaoAlternativa.addEventListener('click', () => {
            respostaSelecionada(alternativa);
        });
        caixaAlternativas.appendChild(botaoAlternativa);
    });
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada + ' ';
    atual++;
    mostraPergunta();
}

mostraPergunta();

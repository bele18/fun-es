const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual dos seguintes elementos é mais importante para você em um livro de romance?",
        alternativas: [
            {
                texto: "O desenvolvimento profundo dos personagens e seus conflitos internos.",
                afirmacao: "Você valoriza personagens complexos que enfrentam desafios internos."
            },
            {
                texto: "A intensidade da química e da atração entre os protagonistas.",
                afirmacao: "Você é movido pela paixão e pela conexão entre os personagens."
            }
        ]
    },
    {
        enunciado: "Em termos de ambientação, qual cenário te atrai mais em uma história de romance?",
        alternativas: [
            {
                texto: "Um cenário histórico rico em detalhes e costumes da época.",
                afirmacao: "Você gosta de mergulhar em épocas passadas e seus encantos."
            },
            {
                texto: "Um cenário contemporâneo com situações do dia a dia que podemos nos identificar.",
                afirmacao: "Prefere histórias próximas da realidade atual e do cotidiano."
            }
        ]
    },
    {
        enunciado: "Qual tipo de obstáculo você prefere que os casais enfrentem em um romance?",
        alternativas: [
            {
                texto: "Obstáculos externos, como diferenças sociais, familiares ou eventos inesperados.",
                afirmacao: "Você acha interessante os desafios que vêm de fora do casal."
            },
            {
                texto: "Obstáculos internos, como inseguranças, medos ou traumas passados de cada um.",
                afirmacao: "Prefere focar nos conflitos emocionais e pessoais."
            }
        ]
    },
    {
        enunciado: "Em relação ao final de um livro de romance, qual você acha mais satisfatório?",
        alternativas: [
            {
                texto: "Um final \"felizes para sempre\" com todos os problemas resolvidos.",
                afirmacao: "Você gosta de finais otimistas e cheios de esperança."
            },
            {
                texto: "Um final mais realista, onde o casal está junto, mas ainda com desafios pela frente.",
                afirmacao: "Prefere finais que refletem a complexidade da vida real."
            }
        ]
    },
    {
        enunciado: "Qual estilo de romance te agrada mais?",
        alternativas: [
            {
                texto: "Um romance mais leve e divertido, com muito humor e diálogos espirituosos.",
                afirmacao: "Você curte histórias que fazem rir e que têm leveza."
            },
            {
                texto: "Um romance mais intenso e dramático, com muitas emoções à flor da pele.",
                afirmacao: "Você prefere emoções fortes e tramas dramáticas."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu perfil de romance:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

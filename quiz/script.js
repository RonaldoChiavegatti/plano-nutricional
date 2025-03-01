const quizData = [
    {
        question: "Qual é o seu objetivo principal?",
        answers: [
            { text: "Perder peso", image: "../assets/perderpeso.webp", description: "Comece a queimar calorias e a derreter gordura" },
            { text: "Ficar forte", image: "../assets/ficarforte.webp", description: "Corpo forte, tonificado e saudável" },
            { text: "Desenvolva hábitos saudáveis", image: "../assets/desenvolvahabito.webp", description: "Diga não aos desejos por comida" }
        ],
        multipleChoice: false
    },
    {
        question: "Como você descreveria seu físico?",
        answers: [
            { text: "Magro", image: "../assets/magro.webp", description: "Físico magro e esbelto" },
            { text: "Médio", image: "../assets/medio.webp", description: "Físico médio e balanceado" },
            { text: "Maior", image: "../assets/maior.webp", description: "Físico maior e mais robusto" },
            { text: "Com excesso de peso", image: "../assets/excdepeso.webp", description: "Físico com excesso de peso" }
        ],
        multipleChoice: false
    },
    {
        question: "Qual é o seu \"corpo dos sonhos\"?",
        answers: [
            { text: "Magro", image: "../assets/magro.webp", description: "Físico magro e esbelto" },
            { text: "Tonificado", image: "../assets/tonificado.webp", description: "Corpo forte e tonificado" },
             { text: "Com curvas", image: "../assets/comcurvas.webp", description: "Corpo com curvas" },
            { text: "Alguns tamanhos a menos", image: "../assets/algnstm.webp", description: "Corpo com alguns tamanhos a menos" }
        ],
        multipleChoice: false
    },
    {
        question: "Quais são suas regiões de foco?",
        answers: [
            { text: "Barriga", image: "../assets/barriga.webp", description: "Focar na área da barriga" },
            { text: "Glúteos", image: "../assets/gluteos.webp", description: "Focar na área dos glúteos" },
            { text: "Peito", image: "../assets/peito.webp", description: "Focar na área do peito" },
            { text: "Pernas", image: "../assets/pernas.webp", description: "Focar na área das pernas" }
        ],
        multipleChoice: true
    },
    {
        question: "Como seu peso muda tipicamente?",
        answers: [
            { text: "Tenho dificuldades em ganhar músculo ou gordura corporal", description: "" },
            { text: "Eu ganho e perco peso sem dificuldade", description: "" },
            { text: "Eu ganho peso facilmente mas tenho dificuldade para perder", description: "" }
        ],
        multipleChoice: false
    },
    {
        question: "Há quanto tempo você esteve no melhor físico de sua vida?",
        answers: [
{ text: "Há menos de um ano", image: "../assets/menosdeumano.webp", description: "" },
            { text: "1 a 2 anos atrás", image: "../assets/1a2anos.webp", description: "" },
            { text: "Há mais de 3 anos", image: "../assets/maisde3anos.webp", description: "" },
            { text: "Nunca", image: "../assets/nunca.webp", description: "" }
        ],
        multipleChoice: false
    },
    {
        question: "Como é sua rotina?",
        answers: [
{ text: "Das 9h00 às 17h00", image: "../assets/dia.webp", description: "" },
            { text: "Turnos noturnos", image: "../assets/noite.webp", description: "" },
            { text: "Meus horários são flexíveis", image: "../assets/depende.webp", description: "" },
            { text: "Outros", image: "../assets/outros.webp", description: "" }
        ],
        multipleChoice: false
    },
    {
        question: "Como você descreveria seu dia típico?",
        answers: [
            { text: "Eu passo a maior parte do dia sentado", image: "../assets/sentado.webp", description: "" },
            { text: "Eu faço pausas ativas", image: "../assets/pausas.webp", description: "" },
            { text: "Fico de pé o dia todo", image: "../assets/depe.webp", description: "" }
        ],
        multipleChoice: false
    },
    {
        question: "Você fica sem fôlego depois de subir um lance de escadas?",
        answers: [
            { text: "Fico tão sem fôlego que nem consigo falar", image: "../assets/semfolego.webp", description: "" },
            { text: "Fico um pouco sem fôlego mas consigo falar", image: "../assets/semfolegomasda.webp", description: "" },
            { text: "Me sinto OK depois de subir escadas", image: "../assets/ok.webp", description: "" },
            { text: "Posso subir facilmente vários andares de escadas", image: "../assets/foguete.webp", description: "" }
        ],
        multipleChoice: false
    },
    {
        question: "Com que frequência você sai para caminhadas?",
        answers: [
            { text: "Quase todos os dias", image: "../assets/tododia.webp", description: "" },
            { text: "3-4 vezes por semana", image: "../assets/3-4porsemana.webp", description: "" },
            { text: "1-2 vezes por semana", image: "../assets/1-2porsemana.webp", description: "" },
            { text: "Uma vez ao mês", image: "../assets/umavezaomes.webp", description: "" }
        ],
        multipleChoice: false
    },
    {
        question: "Você tem dificuldade com algum dos itens abaixo?",
        answers: [
            { text: "Costas sensíveis", image: "../assets/costas.webp", description: "" },
            { text: "Joelhos sensíveis", image: "../assets/joelhos.webp", description: "" },
            { text: "Nenhum dos itens acima", image: "../assets/nenhum.webp", description: "" }
        ],
        multipleChoice: false
    },
    {
        question: "Qual declaração descreve melhor seus hábitos alimentares?",
        answers: [
            { text: "A minha dieta precisa melhorar", image: "../assets/precisamelhorar.webp", description: "" },
            { text: "Eu tenho alguns hábitos saudáveis", image: "../assets/maisoumenos.webp", description: "" },
            { text: "Eu como principalmente saudável", image: "../assets/saudavel.webp", description: "" }
        ],
        multipleChoice: false
    },
    {
        question: "Quantas vezes você come por dia?",
        answers: [
            { text: "Duas vezes (café da manhã, jantar e 2 lanches)", image: "../assets/duasvzs.webp", description: "" },
            { text: "Três vezes (café da manhã, almoço e jantar)", image: "../assets/tresvzs.webp", description: "" },
            { text: "Quatro vezes (café da manhã, lanche, almoço e jantar)", image: "../assets/quatrovzs.webp", description: "" },
            { text: "Cinco vezes (café da manhã, almoço, jantar e 2 lanches)", image: "../assets/cincovzs.webp", description: "" }
        ],
        multipleChoice: false
    },
    {
        question: "Selecione vegetais para incluir no plano de refeição",
        answers: [
            { text: "Brócolis", image: "../assets/brocolis.webp", description: "" },
            { text: "Batata-doce", image: "../assets/batatadoce.webp", description: "" },
            { text: "Cogumelos", image: "../assets/cogumelos.webp", description: "" },
            { text: "Tomate", image: "../assets/tomate.webp", description: "" },
            { text: "Ervilhas", image: "../assets/ervilhas.webp", description: "" },
            { text: "Espinafres", image: "../assets/espinafres.webp", description: "" },
            { text: "Courgete", image: "../assets/courgete.webp", description: "" },
            { text: "Pepper", image: "../assets/pepper.webp", description: "" }
        ],
        multipleChoice: true
    },
    {
        question: "Selecione itens para incluir no plano de refeição",
        answers: [
            { text: "Abacate", image: "../assets/abacate.webp", description: "" },
            { text: "Ovos", image: "../assets/ovos.webp", description: "" },
            { text: "Iogurte", image: "../assets/iogurte.webp", description: "" },
            { text: "Queijo do tipo Cottage", image: "../assets/cottage.webp", description: "" },
            { text: "Tofu", image: "../assets/tofu.webp", description: "" },
            { text: "Azeitonas", image: "../assets/azeitonas.webp", description: "" },
            { text: "Manteiga de amendoim", image: "../assets/menteigadeamen.webp", description: "" },
            { text: "Frutos secos", image: "../assets/frutossecos.webp", description: "" },
            { text: "Mozzarella", image: "../assets/mozzarella.webp", description: "" },
            { text: "Leite", image: "../assets/leite.webp", description: "" }
        ],
        multipleChoice: true
    },
    {
        question: "Selecione carnes para incluir no plano de refeição",
        answers: [
            { text: "Perú", image: "../assets/peru.webp", description: "" },
            { text: "Peixe", image: "../assets/peixe.webp", description: "" },
            { text: "Bife", image: "../assets/bife.webp", description: "" },
            { text: "Frango", image: "../assets/frango.webp", description: "" },
            { text: "Porco", image: "../assets/porco.webp", description: "" },
            { text: "Nenhuma", image: "../assets/nenhuma.webp", description: "" }
        ],
        multipleChoice: true
    },
    {
        question: "Você tem mal-estar estomacal durante o dia?",
        answers: [
            { text: "Sim", image: "../assets/sim.webp", description: "" },
            { text: "Não", image: "../assets/nao.webp", description: "" }
        ],
        multipleChoice: false
    },
    {
        question: "É capaz de manter a sua energia durante o dia?",
        answers: [
            { text: "Os meus níveis de energia não flutuam", image: "../assets/niveisflutuam.webp", description: "" },
            { text: "Fico a arrastar-me antes das refeições", image: "../assets/ficoruim.webp", description: "" },
            { text: "Sinto sono depois do almoço", image: "../assets/sono.webp", description: "" }
        ],
        multipleChoice: false
    },
    {
        question: "Com que frequência você dorme?",
        answers: [
            { text: "Descanso mínimo (menos de 5 horas)", image: null, description: "" },
            { text: "Eu durmo um pouco (5-6 horas)", image: null, description: "" },
            { text: "Durmo bem e bastante (7-8 horas)", image: null, description: "" },
            { text: "Eu gosto de dormir (mais de 8 horas)", image: null, description: "" }
        ],
        multipleChoice: false
    },
    {
        question: "Qual é a sua ingestão diária de água?",
        answers: [
            { text: "Tomo somente café ou chá", image: null, description: "" },
            { text: "Cerca de 2 copos (16 oz)", image: null, description: "" },
            { text: "2 a 6 copos (16-48 oz)", image: null, description: "" },
            { text: "Mais de 6 copos", image: null, description: "" }
        ],
        multipleChoice: false
    },
    {
        question: "Normalmente faço outras coisas enquanto como (assistir televisão, navegar pelas redes sociais)\nA afirmação anterior te descreve?",
        answers: [
            { text: "1", image: null, description: "Nem sempre" },
            { text: "2", image: null, description: "" },
            { text: "3", image: null, description: "" },
            { text: "4", image: null, description: "" },
            { text: "5", image: null, description: "Fortemente" }
        ],
        multipleChoice: false
    },
    {
        question: "É difícil manter uma rotina saudável por causa das pessoas ao meu redor\nA afirmação anterior te descreve?",
        answers: [
            { text: "1", image: null, description: "Nem sempre" },
            { text: "2", image: null, description: "" },
            { text: "3", image: null, description: "" },
            { text: "4", image: null, description: "" },
            { text: "5", image: null, description: "Fortemente" }
        ],
        multipleChoice: false
    },
    {
        question: "Só consigo comer saudável e fazer exercício durante algumas semanas antes de voltar aos meus velhos hábitos\nA afirmação anterior te descreve?",
        answers: [
            { text: "1", image: null, description: "Nem sempre" },
            { text: "2", image: null, description: "" },
            { text: "3", image: null, description: "" },
            { text: "4", image: null, description: "" },
            { text: "5", image: null, description: "Fortemente" }
        ],
        multipleChoice: false
    },
    {
        question: "Uma escolha pouco saudável me faz sentir desapontado, o que me leva a tomar mais más decisões\nA afirmação anterior te descreve?",
        answers: [
            { text: "1", image: null, description: "Nem sempre" },
            { text: "2", image: null, description: "" },
            { text: "3", image: null, description: "" },
            { text: "4", image: null, description: "" },
            { text: "5", image: null, description: "Fortemente" }
        ],
        multipleChoice: false
    },
    {
        question: "Preciso de motivação externa para seguir em frente\nA afirmação anterior te descreve?",
        answers: [
            { text: "1", image: null, description: "Nem sempre" },
            { text: "2", image: null, description: "" },
            { text: "3", image: null, description: "" },
            { text: "4", image: null, description: "" },
            { text: "5", image: null, description: "Fortemente" }
        ],
        multipleChoice: false
    },
    {
        question: "Algum dos seguintes eventos da vida levou a um ganho de peso nos últimos anos? Escolha todas que se aplicam",
        answers: [
            { text: "Casamento ou relacionamento", image: "../assets/casamento.webp", description: "" },
            { text: "Vida profissional ou familiar ocupada", image: "../assets/vidaprof.webp", description: "" },
            { text: "Desafios financeiros", image: "../assets/desafiosfinan.webp", description: "" },
            { text: "Lesão ou invalidez", image: "../assets/lesao.webp", description: "" },
            { text: "Stress ou problemas de saúde mental", image: "../assets/stress.webp", description: "" },
            { text: "Metabolismo mais lento devido ao envelhecimento", image: "../assets/metabolismolento.webp", description: "" },
            { text: "Complicações pós-tratamento", image: "../assets/complicacao.webp", description: "" },
            { text: "Nenhum dos itens acima", image: "../assets/nenhumdositens.webp", description: "" }
        ],
        multipleChoice: true
    },
    {
        question: "Quão motivado você está para perder peso?",
        answers: [
            { text: "Quero ver se este plano é o adequado", image: "../assets/querover.webp", description: "" },
            { text: "Estou determinado a diminuir um tamanho ou dois", image: "../assets/determinado.webp", description: "" },
            { text: "Eu não vou parar até estar no meu peso ideal", image: "../assets/naovouparar.webp", description: "" }
        ],
        multipleChoice: false
    },
    {
        question: "Você tem algum evento importante em breve? Ter algo para se animar pode ser um ótimo motivador para atingir o seu objetivo",
        answers: [
            { text: "Férias", image: "../assets/ferias.webp", description: "" },
            { text: "Casamento", image: "../assets/casamento.webp", description: "" },
            { text: "Feriado", image: "../assets/feriado.webp", description: "" },
            { text: "Evento esportivo", image: "../assets/eventoesportivo.webp", description: "" },
            { text: "Reunião", image: "../assets/reuniao.webp", description: "" },
            { text: "Aniversário", image: "../assets/bolo.webp", description: "" },
            { text: "Outros", image: "../assets/outros.webp", description: "" },
            { text: "Nenhum evento especial em breve", image: "../assets/nadaespecial.webp", description: "" }
        ],
        multipleChoice: false
    },
    {
        question: "Qual a sua altura?",
        answers: [
            { text: "0 cm", image: null, description: "Por favor, introduza um valor entre 90 cm e 243 cm" }
        ]
    },
    {
        question: "Qual é o seu peso atual?",
        answers: [
            { text: "0 kg", image: null, description: "Por favor, introduza um valor entre 25 kg e 300 kg" }
        ]
    },
    {
        question: "Percebido! E qual é o seu objetivo de peso ideal?",
        answers: [
            { text: "0 kg", image: null, description: "Por favor, introduza um valor entre 25 kg e 300 kg" }
        ]
    },
    {
        question: "Quanto tempo tem para preparar refeições, diariamente?",
        answers: [
            { text: "Menos de 30 min", image: null, description: "" },
            { text: "30-60 min", image: null, description: "" },
            { text: "Mais de 1 hora", image: null, description: "" },
            { text: "Eu não cozinho, sou muito ocupado", image: null, description: "" }
        ]
    },
    {
        question: "Qual é o seu nome?",
        answers: [
            { text: "Escreva seu nome", image: null, description: "" }
        ]
    }
];

let currentQuestion = 0;
const progressBar = document.getElementById("progress-bar");

function showInfoScreen() {
    const questionElement = document.querySelector(".question");
    const answerOptionsElement = document.querySelector(".answer-options");
    const nextButton = document.getElementById("next-button");
    const quizProgressElement = document.querySelector(".quiz-progress");

    // Define a questão atual como 20 para permitir voltar corretamente
    currentQuestion = 20;

    // Esconde o botão de próximo padrão
    nextButton.style.display = "none";

    // Atualiza o texto da questão
    questionElement.textContent = "Seu ambiente e você";

    // Cria o conteúdo da tela informativa
    answerOptionsElement.innerHTML = `
        <div class="info-screen">
            <div class="info-image-container">
                <img src="../assets/food-collage.webp" alt="Colagem de alimentos saudáveis" class="info-image">
            </div>
            <div class="info-content">
                <div class="info-box">
                    <p class="info-text">
                        <span class="highlight">COMO</span> comemos é tão relevante quanto <span class="highlight">O QUE</span> comemos. 
                        <span class="info-text-secondary">
                            Romper os maus hábitos alimentares que desenvolvolvemos pode nos ajudar a perder peso sem abrir mão de nada.
                        </span>
                    </p>
                </div>
                <button class="understand-button">OK, ENTENDIDO</button>
            </div>
        </div>
    `;

    // Adiciona o estilo específico para a tela informativa
    const style = document.createElement('style');
    style.textContent = `
        .info-screen {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 12px;
            max-width: 600px;
            margin: 0 auto;
            height: 100%;
            box-sizing: border-box;
        }

        .info-image-container {
            width: 100%;
            margin-bottom: 16px;
            position: relative;
            display: flex;
            justify-content: center;
        }

        .info-image {
            width: 100%;
            max-width: 340px;
            border-radius: 16px;
            height: auto;
            object-fit: cover;
        }

        .info-content {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
        }

        .info-box {
            background: white;
            border-radius: 16px;
            padding: 20px;
            box-shadow: 0 4px 20px rgba(149, 125, 173, 0.15);
            width: 95%;
            max-width: 500px;
            margin: 0 auto;
            transform: translateY(-10px);
            transition: transform 0.3s ease;
            box-sizing: border-box;
        }

        .info-box:hover {
            transform: translateY(-12px);
        }

        .info-text {
            font-size: 1.2em;
            line-height: 1.4;
            color: #333;
            margin: 0;
        }

        .highlight {
            color: #957dad;
            font-weight: bold;
        }

        .info-text-secondary {
            display: block;
            margin-top: 10px;
            font-size: 0.9em;
            color: #666;
            line-height: 1.5;
        }

        .understand-button {
            background-color: #957dad;
            color: white;
            border: none;
            padding: 14px 32px;
            font-size: 1.1em;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(149, 125, 173, 0.3);
            font-weight: 600;
            letter-spacing: 0.5px;
            width: auto;
            min-width: 200px;
            margin-top: 8px;
        }

        .understand-button:hover {
            background-color: #8469a0;
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(149, 125, 173, 0.4);
        }

        .understand-button:active {
            transform: translateY(0);
            box-shadow: 0 2px 8px rgba(149, 125, 173, 0.3);
        }

        /* Responsividade */
        @media (max-width: 768px) {
            .info-screen {
                padding: 12px;
                justify-content: flex-start;
            }

            .info-image-container {
                margin-bottom: 12px;
            }

            .info-image {
                max-width: 300px;
            }

            .info-box {
                padding: 16px;
                width: 92%;
                margin-top: -8px;
            }

            .info-text {
                font-size: 1.1em;
                line-height: 1.4;
            }

            .info-text-secondary {
                font-size: 0.85em;
                margin-top: 8px;
            }
        }

        @media (max-width: 480px) {
            .info-screen {
                padding: 8px;
            }

            .info-image {
                max-width: 260px;
            }

            .info-box {
                padding: 14px;
                width: 90%;
            }

            .info-text {
                font-size: 1em;
            }

            .info-text-secondary {
                font-size: 0.8em;
                line-height: 1.4;
            }

            .understand-button {
                padding: 12px 28px;
                font-size: 1em;
                min-width: 180px;
            }
        }

        @media (max-height: 700px) {
            .info-image {
                max-width: 240px;
            }

            .info-box {
                padding: 12px;
            }

            .info-text {
                font-size: 0.95em;
            }

            .info-text-secondary {
                margin-top: 6px;
            }
        }
    `;
    document.head.appendChild(style);

    // Adiciona o evento de clique no botão
    const understandButton = answerOptionsElement.querySelector('.understand-button');
    understandButton.addEventListener('click', () => {
        loadQuestion(21);
    });

    // Atualiza o progresso
    quizProgressElement.textContent = `21/${quizData.length}`;
    updateProgressBar();
}

function showIMCScreen() {
    const questionElement = document.querySelector(".question");
    const answerOptionsElement = document.querySelector(".answer-options");
    const nextButton = document.getElementById("next-button");
    const quizProgressElement = document.querySelector(".quiz-progress");

    // Define a questão atual como 31 para permitir voltar corretamente
    currentQuestion = 31;

    // Esconde o botão de próximo padrão
    nextButton.style.display = "none";

    // Atualiza o texto da questão
    questionElement.textContent = "Percebido! E qual é o seu objetivo de peso ideal?";

    // Recupera o IMC do localStorage em tempo real
    const height = parseFloat(localStorage.getItem('userHeight')) || 170;
    const weight = parseFloat(localStorage.getItem('currentWeight')) || 70;
    const imc = (weight / ((height / 100) * (height / 100))).toFixed(2);

    // Função para atualizar o conteúdo do IMC
    function updateIMCContent() {
        const currentHeight = parseFloat(localStorage.getItem('userHeight')) || 170;
        const currentWeight = parseFloat(localStorage.getItem('currentWeight')) || 70;
        const currentIMC = (currentWeight / ((currentHeight / 100) * (currentHeight / 100))).toFixed(2);

        // Atualiza o ponto no gráfico
        const activeDot = document.querySelector('.recharts-layer.recharts-active-dot circle');
        if (activeDot) {
            activeDot.setAttribute('cx', getIMCPosition(currentIMC));
            activeDot.setAttribute('cy', getIMCHeight(currentIMC));
        }

        // Atualiza o texto do IMC
        const imcValueElement = document.querySelector('.imc-value');
        if (imcValueElement) {
            imcValueElement.textContent = `Seu resultado de IMC: ${currentIMC}`;
        }
    }

    // Cria o conteúdo da tela informativa
    answerOptionsElement.innerHTML = `
        <div class="imc-screen">
            <div class="imc-chart-container">
                <svg class="recharts-surface" width="352" height="198" viewBox="0 0 352 198">
                    <defs>
                        <clipPath id="recharts-clip">
                            <rect x="12" y="20" height="148" width="328"></rect>
                        </clipPath>
                    </defs>
                    <g class="recharts-cartesian-grid">
                        <g class="recharts-cartesian-grid-horizontal">
                            <line stroke="#ccc" x1="12" y1="168" x2="340" y2="168"></line>
                            <line stroke="#ccc" x1="12" y1="131" x2="340" y2="131"></line>
                            <line stroke="#ccc" x1="12" y1="94" x2="340" y2="94"></line>
                            <line stroke="#ccc" x1="12" y1="57" x2="340" y2="57"></line>
                            <line stroke="#ccc" x1="12" y1="20" x2="340" y2="20"></line>
                        </g>
                    </g>
                    <g class="recharts-layer recharts-line">
                        <path stroke="black" stroke-width="2" fill="none" d="M12,168C48.444,134.7,84.889,101.4,121.333,82.438C157.778,63.475,194.222,58.85,230.667,52.375C267.111,45.9,303.556,37.575,340,29.25"></path>
                        <g class="recharts-layer recharts-line-dots">
                            <circle r="3" stroke="black" stroke-width="2" fill="var(--color-desktop)" cx="12" cy="168"></circle>
                            <circle r="3" stroke="black" stroke-width="2" fill="var(--color-desktop)" cx="121.33333333333333" cy="82.4375"></circle>
                            <circle r="3" stroke="black" stroke-width="2" fill="var(--color-desktop)" cx="230.66666666666666" cy="52.375"></circle>
                            <circle r="3" stroke="black" stroke-width="2" fill="var(--color-desktop)" cx="340" cy="29.25"></circle>
                        </g>
                        <g class="recharts-layer recharts-label-list">
                            <text x="12" y="182" text-anchor="middle" fill="#666">Aba</text>
                            <text x="121.33333333333333" y="182" text-anchor="middle" fill="#666">Pes</text>
                            <text x="230.66666666666666" y="182" text-anchor="middle" fill="#666">Sob</text>
                            <text x="340" y="182" text-anchor="middle" fill="#666">Obe</text>
                            
                            <text x="12" y="156" text-anchor="middle" fill="#808080">0</text>
                            <text x="121.33333333333333" y="70.4375" text-anchor="middle" fill="#808080">18.5</text>
                            <text x="230.66666666666666" y="40.375" text-anchor="middle" fill="#808080">25</text>
                            <text x="340" y="17.25" text-anchor="middle" fill="#808080">30</text>
                        </g>
                    </g>
                    <g class="recharts-layer recharts-active-dot">
                        <circle cx="${getIMCPosition(imc)}" cy="${getIMCHeight(imc)}" r="6" fill="black" stroke-width="2" stroke="#fff"></circle>
                    </g>
                </svg>
            </div>
            <div class="imc-result">
                <div class="imc-value">Seu resultado de IMC: ${imc}</div>
                <div class="imc-description">Você está quase terminando, usamos essas informações para tornar seu pacote mais especial para você, apenas algumas perguntas finais</div>
            </div>
            <button class="understand-button">PRÓXIMO PASSO</button>
        </div>
    `;

    // Adiciona o estilo específico para a tela informativa
    const style = document.createElement('style');
    style.textContent = `
        .imc-screen {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            max-width: 600px;
            margin: 0 auto;
        }

        .imc-chart-container {
            width: 100%;
            max-width: 352px;
            margin-bottom: 20px;
        }

        .imc-result {
            text-align: center;
            margin-bottom: 20px;
        }

        .imc-value {
            font-size: 1.2em;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .imc-description {
            color: #666;
            line-height: 1.4;
        }

        .understand-button {
            background-color: #957dad;
            color: white;
            border: none;
            padding: 14px 32px;
            font-size: 1.1em;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(149, 125, 173, 0.3);
            font-weight: 600;
            letter-spacing: 0.5px;
        }

        .understand-button:hover {
            background-color: #8469a0;
            transform: translateY(-2px);
        }
    `;
    document.head.appendChild(style);

    // Adiciona o evento de clique no botão
    const understandButton = answerOptionsElement.querySelector('.understand-button');
    understandButton.addEventListener('click', () => {
        loadQuestion(32);
    });

    // Atualiza o progresso
    quizProgressElement.textContent = `32/${quizData.length}`;
    updateProgressBar();

    // Adiciona um observador para monitorar mudanças no localStorage
    const storageObserver = new MutationObserver(() => {
        updateIMCContent();
    });

    // Configura o observador para monitorar mudanças no localStorage
    window.addEventListener('storage', () => {
        updateIMCContent();
    });

    // Atualiza o IMC quando a tela é exibida
    updateIMCContent();
}

// Funções auxiliares para posicionar o ponto do IMC no gráfico
function getIMCPosition(imc) {
    const imcValue = parseFloat(imc);
    if (imcValue <= 18.5) {
        return 121.33333333333333;
    } else if (imcValue <= 25) {
        return 230.66666666666666;
    } else if (imcValue <= 30) {
        return 340;
    }
    return 340;
}

function getIMCHeight(imc) {
    const imcValue = parseFloat(imc);
    if (imcValue <= 18.5) {
        return 82.4375;
    } else if (imcValue <= 25) {
        return 52.375;
    } else if (imcValue <= 30) {
        return 29.25;
    }
    return 29.25;
}

function loadQuestion(questionIndex) {
    // Salva a questão atual no localStorage
    localStorage.setItem('currentQuestionIndex', questionIndex);

    if (questionIndex === 20) {
        showInfoScreen();
        return;
    }

    if (questionIndex === 31) {
        showIMCScreen();
        return;
    }

    if (isNaN(questionIndex) || questionIndex === undefined) {
        questionIndex = 0;
    }

    if (questionIndex < 0) {
        questionIndex = 0;
    } else if (questionIndex >= quizData.length) {
        questionIndex = quizData.length - 1;
    }

    currentQuestion = questionIndex;

    const questionElement = document.querySelector(".question");
    const answerOptionsElement = document.querySelector(".answer-options");
    const quizProgressElement = document.querySelector(".quiz-progress");
    const nextButton = document.getElementById("next-button");

    // Limpa o conteúdo anterior
    answerOptionsElement.innerHTML = "";
    questionElement.innerHTML = "";

    // Verifica se é uma questão de escala (1 a 5)
    const isScaleQuestion = quizData[currentQuestion].answers.length === 5 && 
                          quizData[currentQuestion].answers[0].text === "1" &&
                          quizData[currentQuestion].answers[4].text === "5";

    // Atualiza a classe scale
    if (isScaleQuestion) {
        answerOptionsElement.classList.add('scale');
    } else {
        answerOptionsElement.classList.remove('scale');
    }

    // Separa o título e o subtítulo
    if (quizData[currentQuestion].question.includes("\n")) {
        const [title, subtitle] = quizData[currentQuestion].question.split("\n");
        questionElement.innerHTML = `
            ${title}
            <div class="question-subtitle">${subtitle}</div>
        `;
    } else {
        questionElement.textContent = quizData[currentQuestion].question;
    }

    // Atualiza o progresso
    quizProgressElement.textContent = `${currentQuestion + 1}/${quizData.length}`;
    updateProgressBar();

    // Esconde o botão "Próximo" por padrão
    nextButton.style.display = "none";

    // Carrega as opções de resposta
    quizData[currentQuestion].answers.forEach(answer => {
        const answerDiv = document.createElement("div");
        answerDiv.classList.add("answer-option");

        if (isScaleQuestion) {
            // Layout para questões de escala
            answerDiv.innerHTML = `
                <div class="answer-option-title">${answer.text}</div>
                ${answer.description ? `<div class="answer-option-description">${answer.description}</div>` : ''}
            `;

            answerDiv.addEventListener("click", () => {
                answerOptionsElement.querySelectorAll('.answer-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                answerDiv.classList.add('selected');
                
                setTimeout(() => {
                    if (currentQuestion < quizData.length - 1) {
                        loadQuestion(currentQuestion + 1);
                    } else {
                        // Limpa o localStorage quando o quiz é concluído
                        localStorage.removeItem('currentQuestionIndex');
                        alert("Quiz concluído!");
                    }
                }, 300);
            });
        } else if (quizData[currentQuestion].multipleChoice) {
            // Layout para questões de múltipla escolha
            let imageHtml = answer.image ? `<img src="${answer.image}" alt="${answer.text}">` : '';
            const checkboxId = `checkbox-${answer.text.replace(/\s+/g, '-').toLowerCase()}`;
            
            answerDiv.innerHTML = `
                <input type="checkbox" id="${checkboxId}" name="answer" value="${answer.text}">
                ${imageHtml}
                <div class="answer-option-text">
                    <div class="answer-option-title">${answer.text}</div>
                    ${answer.description ? `<div class="answer-option-description">${answer.description}</div>` : ''}
                </div>
            `;

            answerDiv.addEventListener("click", (e) => {
                const checkbox = answerDiv.querySelector('input[type="checkbox"]');
                if (e.target !== checkbox) {
                    checkbox.checked = !checkbox.checked;
                }
                
                // Verifica se há algum checkbox marcado
                const anyChecked = answerOptionsElement.querySelectorAll('input[type="checkbox"]:checked').length > 0;
                nextButton.disabled = !anyChecked;
            });

            // Mostra o botão "Próximo" para questões de múltipla escolha
            nextButton.style.display = "block";
            nextButton.disabled = true;
        } else {
            // Layout para questões normais
            let imageHtml = answer.image ? `<img src="${answer.image}" alt="${answer.text}">` : '';
            
            answerDiv.innerHTML = `
                ${imageHtml}
                <div class="answer-option-text">
                    <div class="answer-option-title">${answer.text}</div>
                    ${answer.description ? `<div class="answer-option-description">${answer.description}</div>` : ''}
                </div>
            `;

            answerDiv.addEventListener("click", () => {
                if (currentQuestion < quizData.length - 1) {
                    loadQuestion(currentQuestion + 1);
                } else {
                    // Limpa o localStorage quando o quiz é concluído
                    localStorage.removeItem('currentQuestionIndex');
                    alert("Quiz concluído!");
                }
            });
        }

        answerOptionsElement.appendChild(answerDiv);
    });

    if (currentQuestion === 28) {
        answerOptionsElement.innerHTML = `
            <div class="height-input-container">
                <div class="height-input-wrapper">
                    <div class="unit-toggle">
                        <button class="unit-button" data-unit="ft">FT</button>
                        <button class="unit-button active" data-unit="cm">CM</button>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center;">
                        <input type="number" 
                               id="height-input" 
                               min="90" 
                               max="243" 
                               placeholder="170"
                               class="height-input">
                        <span class="unit-label">cm</span>
                    </div>
                </div>
                <div class="imc-info">
                    <div class="imc-info-icon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z" fill="#666666"/>
                        </svg>
                    </div>
                    <div class="imc-info-text">
                        Calculando o seu IMC<br>
                        <span class="imc-description">O Índice de Massa Corporal (IMC) é uma métrica de porcentagem de gordura corporal usado normalmente para estimar níveis de risco para potenciais problemas de saúde</span>
                    </div>
                </div>
            </div>
        `;

        const heightInput = document.getElementById('height-input');
        const unitButtons = document.querySelectorAll('.unit-button');
        const unitLabel = document.querySelector('.unit-label');
        let currentUnit = 'cm';

        // Mostra o botão "Próximo" e o desabilita inicialmente
        nextButton.style.display = "block";
        nextButton.disabled = true;

        // Validação da altura
        function validateHeight() {
            const value = parseInt(heightInput.value);
            const min = currentUnit === 'cm' ? 90 : 3;
            const max = currentUnit === 'cm' ? 243 : 8;

            if (value && value >= min && value <= max) {
                nextButton.disabled = false;
                heightInput.classList.remove('invalid');
            } else {
                nextButton.disabled = true;
                heightInput.classList.add('invalid');
            }
        }

        // Alterna entre CM e FT
        unitButtons.forEach(button => {
            button.addEventListener('click', () => {
                unitButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                currentUnit = button.dataset.unit;
                
                if (currentUnit === 'ft' && heightInput.value) {
                    heightInput.value = Math.round(heightInput.value / 30.48);
                    heightInput.placeholder = '5.6';
                    unitLabel.textContent = 'ft';
                } else if (currentUnit === 'cm' && heightInput.value) {
                    heightInput.value = Math.round(heightInput.value * 30.48);
                    heightInput.placeholder = '170';
                    unitLabel.textContent = 'cm';
                }

                validateHeight();
            });
        });

        heightInput.addEventListener('input', validateHeight);
    } else if (currentQuestion === 29) {
        answerOptionsElement.innerHTML = `
            <div class="height-input-container">
                <div class="height-input-wrapper">
                    <div class="unit-toggle">
                        <button class="unit-button" data-unit="lbs">LBS</button>
                        <button class="unit-button active" data-unit="kg">KG</button>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center;">
                        <input type="number" 
                               id="weight-input" 
                               min="25" 
                               max="300" 
                               placeholder="70"
                               class="height-input">
                        <span class="unit-label">kg</span>
                    </div>
                </div>
                <div id="imc-result" class="imc-info success" style="display: none;">
                    <div class="imc-info-icon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM12.2 6.1L7.6 10.7C7.4 10.9 7.2 11 6.9 11C6.6 11 6.4 10.9 6.2 10.7L3.8 8.3C3.4 7.9 3.4 7.3 3.8 6.9C4.2 6.5 4.8 6.5 5.2 6.9L6.9 8.6L10.8 4.7C11.2 4.3 11.8 4.3 12.2 4.7C12.6 5.1 12.6 5.7 12.2 6.1Z" fill="#4CAF50"/>
                        </svg>
                    </div>
                    <div class="imc-info-text">
                        O seu IMC é <span id="imc-value">24,22</span>, considerado normal<br>
                        <span class="imc-description">Está a começar bem! Agora vamos usar o seu IMC para criar um programa adaptado às suas necessidades.</span>
                    </div>
                </div>
            </div>
        `;

        const weightInput = document.getElementById('weight-input');
        const unitButtons = document.querySelectorAll('.unit-button');
        const unitLabel = document.querySelector('.unit-label');
        const imcResult = document.getElementById('imc-result');
        const imcValue = document.getElementById('imc-value');
        let currentUnit = 'kg';
        let lastHeight = localStorage.getItem('userHeight') || 170; // Pega a altura da questão anterior

        // Mostra o botão "Próximo" e o desabilita inicialmente
        nextButton.style.display = "block";
        nextButton.disabled = true;

        function calculateIMC(weight, height) {
            const imc = weight / ((height / 100) * (height / 100));
            return imc.toFixed(2);
        }

        function getIMCCategory(imc) {
            if (imc < 18.5) return "abaixo do peso";
            if (imc < 25) return "normal";
            if (imc < 30) return "sobrepeso";
            if (imc < 35) return "obesidade grau I";
            if (imc < 40) return "obesidade grau II";
            return "obesidade grau III";
        }

        function validateWeight() {
            const value = parseInt(weightInput.value);
            const min = currentUnit === 'kg' ? 25 : 55;
            const max = currentUnit === 'kg' ? 300 : 660;

            if (value && value >= min && value <= max) {
                nextButton.disabled = false;
                weightInput.classList.remove('invalid');
                
                // Calcula e mostra o IMC
                const weightInKg = currentUnit === 'kg' ? value : value * 0.453592;
                const imc = calculateIMC(weightInKg, lastHeight);
                const category = getIMCCategory(parseFloat(imc));
                
                imcValue.textContent = imc.replace('.', ',');
                imcResult.style.display = 'flex';
                imcResult.querySelector('.imc-info-text').innerHTML = 
                    `O seu IMC é <span id="imc-value">${imc.replace('.', ',')}</span>, considerado ${category}<br>` +
                    `<span class="imc-description">Está a começar bem! Agora vamos usar o seu IMC para criar um programa adaptado às suas necessidades.</span>`;
            } else {
                nextButton.disabled = true;
                weightInput.classList.add('invalid');
                imcResult.style.display = 'none';
            }
        }

        // Alterna entre KG e LBS
        unitButtons.forEach(button => {
            button.addEventListener('click', () => {
                unitButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                currentUnit = button.dataset.unit;
                
                if (currentUnit === 'lbs' && weightInput.value) {
                    weightInput.value = Math.round(weightInput.value * 2.20462);
                    weightInput.placeholder = '154';
                    unitLabel.textContent = 'lbs';
                } else if (currentUnit === 'kg' && weightInput.value) {
                    weightInput.value = Math.round(weightInput.value / 2.20462);
                    weightInput.placeholder = '70';
                    unitLabel.textContent = 'kg';
                }

                validateWeight();
            });
        });

        weightInput.addEventListener('input', validateWeight);
    } else if (currentQuestion === 30) {
        const currentWeight = parseFloat(localStorage.getItem('currentWeight')) || 0;
        
        answerOptionsElement.innerHTML = `
            <div class="height-input-container">
                <div class="height-input-wrapper">
                    <div class="unit-toggle">
                        <button class="unit-button" data-unit="lbs">LBS</button>
                        <button class="unit-button active" data-unit="kg">KG</button>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center;">
                        <input type="number" 
                               id="weight-input" 
                               min="25" 
                               max="300" 
                               placeholder="70"
                               class="height-input">
                        <span class="unit-label">kg</span>
                    </div>
                </div>
                <div class="imc-info">
                    <div class="imc-info-icon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z" fill="#666666"/>
                        </svg>
                    </div>
                    <div class="imc-info-text">
                        MEXA-SE: calculando sua meta...<br>
                        <span class="imc-description">Um estudo da Universidade do Utah demonstrou que treinar 5 minutos por dia pode manter o seu nível de fitness, melhorar os níveis de energia e levar a um melhor sono.</span>
                    </div>
                </div>
            </div>
        `;

        const weightInput = document.getElementById('weight-input');
        const unitButtons = document.querySelectorAll('.unit-button');
        const unitLabel = document.querySelector('.unit-label');
        const imcInfo = document.querySelector('.imc-info-text');
        let currentUnit = 'kg';

        // Mostra o botão "Próximo" e o desabilita inicialmente
        nextButton.style.display = "block";
        nextButton.disabled = true;

        function calculateWeightDifference(targetWeight) {
            const difference = currentWeight - targetWeight;
            const percentageDiff = (difference / currentWeight) * 100;
            return {
                difference: Math.abs(difference),
                percentage: Math.abs(percentageDiff),
                isGain: difference < 0
            };
        }

        function updateInfoMessage(targetWeight) {
            const { difference, percentage, isGain } = calculateWeightDifference(targetWeight);
            const roundedPercentage = Math.round(percentage);
            
            if (isGain) {
                if (roundedPercentage <= 5) {
                    imcInfo.innerHTML = `
                        MEXA-SE: ganhar ${roundedPercentage}% do seu peso<br>
                        <span class="imc-description">Estudos mostram que ganhar massa magra de forma gradual (0.5-1kg por mês) tem 84% mais chances de ser mantida a longo prazo. Vamos começar!</span>
                    `;
                } else if (roundedPercentage <= 10) {
                    imcInfo.innerHTML = `
                        MEXA-SE: ganhar ${roundedPercentage}% do seu peso<br>
                        <span class="imc-description">Pesquisas indicam que combinar treino de força com superávit calórico de 300-500 calorias pode resultar em ganho de 2-3kg de massa magra em 12 semanas.</span>
                    `;
                } else {
                    imcInfo.innerHTML = `
                        MEXA-SE: ganhar ${roundedPercentage}% do seu peso<br>
                        <span class="imc-description">Um estudo com 800 participantes mostrou que aumentar o peso de forma saudável requer consistência: 78% dos bem-sucedidos mantiveram uma rotina de exercícios por pelo menos 6 meses.</span>
                    `;
                }
            } else {
                if (roundedPercentage <= 5) {
                    imcInfo.innerHTML = `
                        MEXA-SE: perder ${roundedPercentage}% do seu peso<br>
                        <span class="imc-description">Pesquisas mostram que perder 5% do peso corporal já pode reduzir significativamente o risco de diabetes tipo 2 e melhorar a saúde cardiovascular.</span>
                    `;
                } else if (roundedPercentage <= 10) {
                    imcInfo.innerHTML = `
                        MEXA-SE: perder ${roundedPercentage}% do seu peso<br>
                        <span class="imc-description">Um estudo da Universidade de Michigan revelou que pessoas que perderam 10% do peso corporal tiveram uma melhora de 50% na qualidade do sono e níveis de energia.</span>
                    `;
                } else if (roundedPercentage <= 20) {
                    imcInfo.innerHTML = `
                        MEXA-SE: perder ${roundedPercentage}% do seu peso<br>
                        <span class="imc-description">Dados do National Weight Control Registry mostram que 89% das pessoas que mantiveram uma perda significativa de peso combinaram dieta e exercício regular.</span>
                    `;
                } else {
                    imcInfo.innerHTML = `
                        MEXA-SE: perder ${roundedPercentage}% do seu peso<br>
                        <span class="imc-description">Estudos comprovam que pessoas que estabelecem metas graduais têm 3x mais chances de sucesso. Vamos dividir essa jornada em etapas alcançáveis!</span>
                    `;
                }
            }
        }

        function validateWeight() {
            const value = parseInt(weightInput.value);
            const min = currentUnit === 'kg' ? 25 : 55;
            const max = currentUnit === 'kg' ? 300 : 660;

            if (value && value >= min && value <= max) {
                nextButton.disabled = false;
                weightInput.classList.remove('invalid');
                
                // Salva o peso atual no localStorage em kg
                const weightInKg = currentUnit === 'kg' ? value : value * 0.453592;
                localStorage.setItem('currentWeight', weightInKg);
                
                // Atualiza a mensagem com a porcentagem
                const targetWeight = currentUnit === 'kg' ? value : value * 0.453592;
                updateInfoMessage(targetWeight);
            } else {
                nextButton.disabled = true;
                weightInput.classList.add('invalid');
            }
        }

        // Alterna entre KG e LBS
        unitButtons.forEach(button => {
            button.addEventListener('click', () => {
                unitButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                currentUnit = button.dataset.unit;
                
                if (currentUnit === 'lbs' && weightInput.value) {
                    weightInput.value = Math.round(weightInput.value * 2.20462);
                    weightInput.placeholder = '154';
                    unitLabel.textContent = 'lbs';
                } else if (currentUnit === 'kg' && weightInput.value) {
                    weightInput.value = Math.round(weightInput.value / 2.20462);
                    weightInput.placeholder = '70';
                    unitLabel.textContent = 'kg';
                }

                validateWeight();
            });
        });

        weightInput.addEventListener('input', validateWeight);
    } else if (currentQuestion === quizData.length - 1) {
        answerOptionsElement.innerHTML = `
            <div class="height-input-container">
                <div class="height-input-wrapper">
                    <div style="display: flex; align-items: center; justify-content: center;">
                        <input type="text" 
                               id="name-input" 
                               placeholder="Escreva seu nome"
                               class="height-input"
                               style="font-size: 1.5em; border-bottom: 1px solid #ddd; width: 200px;">
                    </div>
                </div>
                <div class="imc-info">
                    <div class="imc-info-icon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z" fill="#666666"/>
                        </svg>
                    </div>
                    <div class="imc-info-text">
                        Último passo!<br>
                        <span class="imc-description">Seu plano personalizado está quase pronto. Digite seu nome para continuar.</span>
                    </div>
                </div>
            </div>
        `;

        const nameInput = document.getElementById('name-input');
        
        // Mostra o botão "Próximo" e o desabilita inicialmente
        nextButton.style.display = "block";
        nextButton.disabled = true;
        nextButton.textContent = "PRÓXIMO PASSO";

        // Habilita o botão apenas quando o usuário digitar algo
        nameInput.addEventListener('input', () => {
            nextButton.disabled = !nameInput.value.trim();
        });

        // Modifica o comportamento do botão próximo para redirecionar ao checkout
        nextButton.onclick = () => {
            const userName = nameInput.value.trim();
            if (userName) {
                // Salvar o nome como parte do objeto quizData
                const quizData = JSON.parse(localStorage.getItem('quizData') || '{}');
                quizData.name = userName;
                localStorage.setItem('quizData', JSON.stringify(quizData));
                
                // Redireciona para a página de checkout
                window.location.href = './Checkout.html';
            }
        };
    }

    // Rastreia progresso do quiz
    trackQuizProgress(questionIndex + 1, quizData.length);
}

// Inicializa o botão "Próximo"
const nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", () => {
    if (currentQuestion < quizData.length - 1) {
        loadQuestion(currentQuestion + 1);
    } else {
        // Limpa o localStorage quando o quiz é concluído
        localStorage.removeItem('currentQuestionIndex');
        alert("Quiz concluído!");
    }
});

// Modifica o comportamento do botão voltar para lidar com a tela informativa
const backButton = document.querySelector(".back-button");
backButton.addEventListener("click", () => {
    if (currentQuestion > 0) {
        if (currentQuestion === 32) {
            showIMCScreen();
            return;
        }
        // Se estiver na questão 21 (após a tela informativa), volta para a tela informativa
        if (currentQuestion === 21) {
            showInfoScreen();
            return;
        }
        loadQuestion(currentQuestion - 1);
    }
});

// Atualiza a barra de progresso
function updateProgressBar() {
    progressBar.innerHTML = "";
    for (let i = 0; i < quizData.length; i++) {
        const span = document.createElement("span");
        span.addEventListener("click", () => {
            loadQuestion(i);
        });
        if (i <= currentQuestion) {
            span.classList.add("completed");
        }
        progressBar.appendChild(span);
    }
}

function trackQuizProgress(currentStep, totalSteps) {
    try {
        // Calcula a porcentagem de progresso
        const progress = Math.round((currentStep / totalSteps) * 100);
        
        // Salva o progresso no localStorage
        localStorage.setItem('quizProgress', progress);
        
        // Atualiza os dados do quiz no localStorage
        const quizData = JSON.parse(localStorage.getItem('quizData') || '{}');
        quizData.currentStep = currentStep;
        quizData.totalSteps = totalSteps;
        quizData.progress = progress;
        localStorage.setItem('quizData', JSON.stringify(quizData));
        
    } catch (error) {
        console.error('Erro ao rastrear progresso do quiz:', error);
    }
}

// Modifica a inicialização do quiz para verificar o localStorage
// Substitua a linha "loadQuestion(0);" no final do arquivo por:
const savedQuestionIndex = parseInt(localStorage.getItem('currentQuestionIndex')) || 0;
loadQuestion(savedQuestionIndex);
//esse é um arquivo temporário. as perguntas estarão na api depois
//estou usando esse arquivo só para renderizar e testar

const JSquestions = [
  {
    questionText: "Qual a diferença entre =, == e === ?",
    answerOptions: [
      {
        answerText:
          "O sinal = representa atribuição, == é comparação e === é comparação estrita",
        isCorrect: true,
      },
      {
        answerText: "loren ipsum",
        isCorrect: false,
      },
      {
        answerText: "loren ipsum",
        isCorrect: false,
      },
      {
        answerText: "loren ipsum",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "O que significa a sigla DOM?",
    answerOptions: [
      {
        answerText: "Document Object Model",
        isCorrect: true,
      },
      {
        answerText: "loren ipsum",
        isCorrect: false,
      },
      {
        answerText: "loren ipsum",
        isCorrect: false,
      },
      {
        answerText: "loren ipsum",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Para que serve um array?",
    answerOptions: [
      {
        answerText: "Para armazenar dados de um mesmo tipo",
        isCorrect: true,
      },
      {
        answerText: "loren ipsum",
        isCorrect: false,
      },
      {
        answerText: "loren ipsum",
        isCorrect: false,
      },
      {
        answerText: "loren ipsum",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Quais são os tipos de dados usados no JavaScript?",
    answerOptions: [
      {
        answerText: "String, number, boolean, null e undefined",
        isCorrect: true,
      },
      {
        answerText: "loren ipsum",
        isCorrect: false,
      },
      {
        answerText: "loren ipsum",
        isCorrect: false,
      },
      {
        answerText: "loren ipsum",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Qual a diferença entre map e forEach?",
    answerOptions: [
      {
        answerText: "Map retorna um array e forEach não",
        isCorrect: true,
      },
      {
        answerText: "loren ipsum",
        isCorrect: false,
      },
      {
        answerText: "loren ipsum",
        isCorrect: false,
      },
      {
        answerText: "loren ipsum",
        isCorrect: false,
      },
    ],
  },
];

 const cssQuestions = [
  {
    "questionText":"Para adicionar um efeito assim que o usuario passar o mouse por cima dos elementos, qual seletor de css é usado?",
    "category": "CSS",
    "answerOptions": [
      {
        "answerText": "::clicked",
        "isCorrect": false,
      },
      {
        "answerText": "::before",
        "isCorrect": false,
      },
      {
        "answerText": "::hover",
        "isCorrect": true,
      },
      {
        "answerText": "::focus",
        "isCorrect":false
      }
      ]
    },
    {
      "questionText":
        "Assinale a alternativa que apresenta a sintaxe incorreta da função CSS calc() ",
      "category": "CSS",
      "answerOptions": [
        {
          "answerText": "width: calc(100% - 80px);",
          "isCorrect": false,
        },
        {
          "answerText": "width: calc(100vw / 2);",
          "isCorrect": false,
        },
        {
          "answerText": "width: calc(50% + 50vw);",
          "isCorrect": false,
        },
        {
          "answerText": "width: calc(200px**10vw);",
          "isCorrect": true,
        }
        ]
      },
      {
      "questionText":"Assinale a alternativa que apresenta o codigo correto para centralizar um objeto no css.",
      "category": "CSS",
      "answerOptions": [
        {
          "answerText": "div{ display:flex; flex-direction:row; justify-content:center;}",
          "isCorrect": true,
        },
        {
          "answerText": "div{margin-top:50%;margin-left:50%;}",
          "isCorrect": false,
        },
        {
          "answerText": "div{align-text:center;}",
          "isCorrect": false,
        },
        {
          "answerText": "div{position:center;}",
          "isCorrect":false 
        }
        ]
      },
      {
      "questionText":"Qual alternativa que contem uma unidade medida que nao é possivel usar no css?",
      "category": "CSS",
      "answerOptions": [
        {
          "answerText": "10%",
          "isCorrect": false,
        },
        {
      "answerText": "10rem",
          "isCorrect": false,
        },
        {
          "answerText": "10inch",
          "isCorrect": true,
        },
        {
          "answerText": "10vh",
          "isCorrect":false 
        }
        ]
      },
      {
      "questionText":"Qual a maneira correta de se definir variaveis em CSS?",
      "category": "CSS",
      "answerOptions": [
        {
          "answerText": ":root {let mainColor:#FFFFFF;}",
          "isCorrect": false,
        },
        {
      "answerText": ":root {var (--mainColor):#FFFFFF;}",
          "isCorrect": false,
        },
        {
          "answerText": ":root {export-mainHeight(25px);}",
          "isCorrect": false,
        },
        {
          "answerText": ":root { background: #ff0000;}",
          "isCorrect":true 
        }
        ]
      },
      { 
        "questionText":"<div class = 'container'></div> Qual das alternativas abaixo seria a forma correta de se acessar a classe?",
        "category": "CSS",
        "answerOptions": [
          {
            "answerText": "#container{}",
            "isCorrect": false,
          },
          {
            "answerText": ".container{}",
            "isCorrect": true,
          },
          {
            "answerText": "div>#container{}",
            "isCorrect": false,
          },
          {
            "answerText": "div>.container{}",
            "isCorrect": false,
          },
        ],
      },
      {
        "questionText":
          "A propriedade justify-content alinha itens dentro de container flexiveis. Assinale a alternativa que apresenta o valor da propriedade justify-content em que espaço vazio antes do primeiro e depois do último item é igual a metade do espaço entre cada par de itens adjacentes",
        "category": "CSS",
        "answerOptions": [
        {
          "answerText": "space-between;",
          "isCorrect": false,
        },
        {
          "answerText": "space-evenly;",
          "isCorrect": false,
        },
        {
          "answerText": "space-around;",
          "isCorrect": true,
        },
        {
          "answerText": "space-equals;",
          "isCorrect": false,
        },
      ],
    },
    {
    "questionText":
      "Assinale a alternativa que possui algum erro de sintaxe do controlador de animações @keyframe",
    "category": "CSS",
    "answerOptions": [
      {
        "answerText":
          "@keyframes slidein {from {width: 300%;} to{width: 100%;} }",
        "isCorrect": false,
      },
      {
        "answerText":
          "@keyframes slidein{ 0%{ width:300%;} 100%{  width:100%; }   }",
        "isCorrect": false,
      },
      {
        "answerText":
          "@keyframes identifier {   0% { top: 0; left: 0; } 30% { top: 50px; }  68%, 72% { left: 50px; } 100% { top: 100px; left: 100%; }}",
        "isCorrect": false,
      },
      {
        "answerText":
          "@keyframes animation{ before{ margin-left:0;}  after{margin-left:100px;}}",
        "isCorrect": true,
      },
    ],
  },
  {
    "questionText":
      "Em relação ao media query assinale a afirmativa que possui erro.",
    "category": "CSS",
    "answerOptions": [
      {
        "answerText":
          "Quando uma media query é verdadeira, a camada de estilo ou as regras de estilos correspondentes são aplicadas.  ex:@media (min-width: 700px) { ... }.",
        "isCorrect": false,
      },
      {
        "answerText":
          "A palavra-chave and é usada para combinar múltiplas media features.Funciona se um dos casos forem verdadeiros ex:@media (min-width: 700px) and (orientation: landscape) { ... }.",
        "isCorrect": true,
      },
      {
        "answerText":
          "A palavra chave not se aplica em toda a media query e retorna verdadeiro, caso contrário retorna falso ex:@media not all and (monochrome) { ... }.",
        "isCorrect": false,
      },
      {
        "answerText":
          "A palavra chave only previne que navegadores antigos que não suportam media queries com media features de aplicar os estilos dados ex:<link rel='stylesheet' media='only screen and (color)' href='example.css' />'",
        "isCorrect": false,
      },
    ],
  },
  {
    "questionText":
      "A propriedade background CSS são usadas para adicionar efeitos de plano de fundo para elementos. Assinale a alternativa que não apresenta erro de sintaxe;",
    "category": "CSS",
    "answerOptions": [
      {
        "answerText": "background-color:azul;",
        "isCorrect": false,
      },
      {
        "answerText": "background-image: paper.gif;",
        "isCorrect": false,
      },
      {
        "answerText": "background-image: url('paper.gif');",
        "isCorrect": false,
      },
      {
        "answerText": "background-repeat: repeat-3x;",
        "isCorrect": true,
      },
    ],
  }
  

  ]
export default JSquestions;

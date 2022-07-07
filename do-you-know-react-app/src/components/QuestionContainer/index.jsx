import { QuestionCard } from "../QuestionCard";
import { QuestionContainerStyled } from "./style";
//container é aquele card branco

const QuestionContainer = () => {
  const teste = [
    {
      questionText: "Qual a diferença entre =, == e ===?",
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
  ];

  return (
    <QuestionContainerStyled>
      <QuestionCard questions={teste} />
    </QuestionContainerStyled>
  );
};

export default QuestionContainer;

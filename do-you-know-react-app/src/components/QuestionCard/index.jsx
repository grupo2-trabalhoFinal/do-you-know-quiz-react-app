import { ButtonAnswer } from "../ButtonAnswer";
import { StyledQuestionCard } from "./style";

export const QuestionCard = ({ question, fowardQuestion }) => {
  return (
    <>
      {
        <StyledQuestionCard>
          <h3>{question.questionText}</h3>
          {question.answerOptions.map((answer) => (
            <ButtonAnswer
              key={answer.answerText}
              onClick={() => fowardQuestion()}
            >
              {answer.answerText}
            </ButtonAnswer>
          ))}
        </StyledQuestionCard>
      }
    </>
  );
};

import { StyledQuestionCard } from "./style";

export const QuestionCard = ({ question, fowardQuestion }) => {
  return (
    <>
      {
        <StyledQuestionCard>
          <h3>{question.questionText}</h3>
          {question.answerOptions.map((answer) => (
            <button key={answer.answerText} onClick={() => fowardQuestion()}>
              {answer.answerText}
            </button>
          ))}
        </StyledQuestionCard>
      }
    </>
  );
};

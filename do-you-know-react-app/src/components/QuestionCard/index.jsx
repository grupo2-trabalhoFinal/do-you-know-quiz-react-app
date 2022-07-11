import { StyledQuestionCard } from "./style";

export const QuestionCard = ({ questions }) => {
  return (
    <>
      {questions.map((question) => (
        <StyledQuestionCard>
          <h3>{question.questionText}</h3>
          {question.answerOptions.map((answer) => (
            <button>{answer.answerText}</button>
          ))}
        </StyledQuestionCard>
      ))}
    </>
  );
};

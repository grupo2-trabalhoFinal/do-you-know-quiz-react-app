import { useEffect, useState } from "react";
import api from "../../services/api";
import { StyledAnswerButton } from "../ButtonAnswer/style";
import { StyledQuestionCard } from "./style";

export const QuestionCard = ({ question, fowardQuestion, clicked }) => {
  const [pointsRanking, setPointsRanking] = useState(0);
  console.log(pointsRanking);

  useEffect(() => {
    api.get("/users").then((response) => console.log(response.data.users));
  }, [pointsRanking]);

  function successfulAnswer(points) {
    setPointsRanking(pointsRanking + points);

    console.log("vapo");
  }

  function wrongAnswer(points) {
    setPointsRanking(pointsRanking - points);
    console.log(pointsRanking);
  }

  return (
    <>
      {
        <StyledQuestionCard>
          <h3>{question.questionText}</h3>
          {question.answerOptions.map((answer) => {
            const isCorrect = answer.isCorrect;

            return (
              <StyledAnswerButton
                key={answer.answerText}
                isCorrect={isCorrect}
                clicked={clicked}
                onClick={() => {
                  fowardQuestion();
                  if (isCorrect) {
                    successfulAnswer(10);
                  } else {
                    wrongAnswer(5);
                  }
                }}
              >
                {answer.answerText}
              </StyledAnswerButton>
            );
          })}
        </StyledQuestionCard>
      }
    </>
  );
};

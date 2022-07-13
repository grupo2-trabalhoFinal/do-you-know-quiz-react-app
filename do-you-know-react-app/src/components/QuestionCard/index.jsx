import { useEffect, useState } from "react";
import api from "../../services/api";
import { StyledAnswerButton } from "../ButtonAnswer/style";
import { StyledQuestionCard } from "./style";

export const QuestionCard = ({ question, fowardQuestion, clicked }) => {
  const userId = localStorage.getItem("@quizId");

  async function neymar() {
    const coutinho = await api
      .get(`/users/${userId}`)
      .then((res) => setPointsRanking(res.data.points));
    return coutinho;
  }
  const [pointsRanking, setPointsRanking] = useState(neymar);
  console.log(pointsRanking);

  useEffect(() => {
    const userId = localStorage.getItem("@quizId");
    const userToken = localStorage.getItem("@quizToken");
    const data = { points: pointsRanking };
    api
      .patch(`/users/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => console.log(res));
  }, [pointsRanking]);

  function successfulAnswer(points) {
    setPointsRanking(pointsRanking + points);
  }

  function wrongAnswer(points) {
    const userId = localStorage.getItem("@quizId");
    const userToken = localStorage.getItem("@quizToken");
    const data = { points: pointsRanking };
    api
      .patch(`/users/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(() => setPointsRanking(pointsRanking - points));
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

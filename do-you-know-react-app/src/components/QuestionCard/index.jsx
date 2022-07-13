import { useEffect, useState } from "react";
import api from "../../services/api";
import { StyledAnswerButton } from "../ButtonAnswer/style";
import Counter from "../Counter";
import { StyledQuestionCard } from "./style";

export const QuestionCard = ({ question, fowardQuestion, clicked }) => {
  const [quizCounter, setQuizCounter] = useState(10);
  const [myTimeout, setMyTimeout] = useState(0);

  /*const myInterval = setInterval(() => {
    setQuizCounter(quizCounter - 1);
  }, 3500);*/

  console.log(quizCounter);

  useEffect(() => {
    if (quizCounter > 0) {
      const countTimeout = setTimeout(() => {
        setQuizCounter(quizCounter - 1);
      }, 1000);
      setMyTimeout(countTimeout);
    } else {
      setQuizCounter(10);
      fowardQuestion();
    }
  }, [quizCounter]);

  function handleClick(isCorrect) {
    clearTimeout(myTimeout);
    setQuizCounter(10);
    fowardQuestion();

    if (isCorrect) {
      successfulAnswer(10);
    } else {
      wrongAnswer(5);
    }
  }

  const userId = localStorage.getItem("@quizId");

  async function neymar() {
    const coutinho = await api
      .get(`/users/${userId}`)
      .then((res) => setPointsRanking(res.data.points));
    return coutinho;
  }

  const [pointsRanking, setPointsRanking] = useState(neymar);

  useEffect(() => {
    const userId = localStorage.getItem("@quizId");
    const userToken = localStorage.getItem("@quizToken");
    const data = { points: pointsRanking };
    api.patch(`/users/${userId}`, data, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
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
          <Counter fowardQuestion={fowardQuestion} quizCounter={quizCounter} />
          <h3>{question.questionText}</h3>
          {question.answerOptions.map((answer) => {
            const isCorrect = answer.isCorrect;

            return (
              <StyledAnswerButton
                key={answer.answerText}
                isCorrect={isCorrect}
                clicked={clicked}
                onClick={() => {
                  handleClick(isCorrect);
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

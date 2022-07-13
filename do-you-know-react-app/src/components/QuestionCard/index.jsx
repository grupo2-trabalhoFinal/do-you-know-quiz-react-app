import { useContext } from "react";
import { useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import api from "../../services/api";
import { StyledAnswerButton } from "../ButtonAnswer/style";
import Counter from "../Counter";
import { StyledQuestionCard } from "./style";

export const QuestionCard = ({ question, fowardQuestion, clicked }) => {
  const [quizCounter, setQuizCounter] = useState(10);
  const [myTimeout, setMyTimeout] = useState(0);

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

  const { countQuestion, setCountQuestion } = useContext(UserContext);

  async function neymar() {
    const coutinho = await api
      .get(`/users/${userId}`)
      .then((res) => setPointsRanking(res.data.points));
    return coutinho;
  }

  const [pointsRanking, setPointsRanking] = useState(neymar);

  useEffect(() => {
    const userId = localStorage.getItem("@quizId");
    const userToken = JSON.parse(localStorage.getItem("@quizToken"));

    const data = { points: pointsRanking };
    api
      .patch(`/users/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, [pointsRanking]);

  function successfulAnswer(points) {
    setCountQuestion(countQuestion + 1);
    setPointsRanking(pointsRanking + points);
  }

  function wrongAnswer(points) {
    const userId = localStorage.getItem("@quizId");
    const userToken = JSON.parse(localStorage.getItem("@quizToken"));
    const data = { points: pointsRanking };
    api
      .patch(`/users/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(() => setPointsRanking(pointsRanking - points));
  }

  const [currentsQuestions, setCurrentsQuestions] = useState(
    question.answerOptions
  );

  useEffect(() => {
    setCurrentsQuestions(shuffleArray(question.answerOptions));
  }, [question]);

  function shuffleArray(arr) {
    for (let i = question.answerOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
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


import { useEffect } from "react";
import { useState } from "react";
import { StyledAnswerButton } from "../ButtonAnswer/style";
import { StyledQuestionCard } from "./style";

export const QuestionCard = ({ question, fowardQuestion, clicked }) => {

  const [currentsQuestions, setCurrentsQuestions] = useState(question.answerOptions)
  
  // let randomAnswer = []
  // for (let i = question.answerOptions.length - 1; i > 0; i--) {
  //   const j = Math.floor(Math.random() * (i + 1));
  //   [question.answerOptions[i], question.answerOptions[j]] = [question.answerOptions[j], question.answerOptions[i]];
  //   console.log(question.answerOptions[j])
  // }
  // console.log(question.answerOptions)
  

  useEffect(() => {
    
      setCurrentsQuestions(shuffleArray(question.answerOptions))
    
  }, [question])

  function shuffleArray(arr) {
    console.log(arr)
    for (let i = question.answerOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log(arr)
      return arr;
}

  
  return (
    <>
      {
        <StyledQuestionCard>
          <h3>{question.questionText}</h3>
          
          {currentsQuestions.map((answer) => {
            const isCorrect = answer.isCorrect;

            return (
              <StyledAnswerButton
                key={answer.answerText}
                isCorrect={isCorrect}
                clicked={clicked}

                onClick={(event) =>  {
                  
                  fowardQuestion();
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


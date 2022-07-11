import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { QuestionCard } from "../QuestionCard";
import { QuestionContainerStyled } from "./style";
//container é aquele card branco

const QuestionContainer = () => {
  const { listCategory, singleQuestion, changeQuestion } =
    useContext(UserContext);

  const [counter, setCounter] = useState(0);

  counter === 0
    ? changeQuestion(listCategory[counter])
    : setTimeout(() => {
        changeQuestion(listCategory[counter]);
      }, 1000);

  const fowardQuestion = () => {
    counter >= 9 ? setCounter(9) : setCounter(counter + 1);

    changeQuestion(listCategory[counter]);
  };

  return (
    <QuestionContainerStyled>
      <QuestionCard question={singleQuestion} fowardQuestion={fowardQuestion} />
    </QuestionContainerStyled>
  );
};

export default QuestionContainer;

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

  const [clicked, setClicked] = useState(false);

  counter === 0
    ? changeQuestion(listCategory[counter])
    : setTimeout(() => {
        changeQuestion(listCategory[counter]);
        setClicked(false);
      }, 900);

  const fowardQuestion = () => {
    counter >= 9 ? setCounter(9) : setCounter(counter + 1);
    setClicked(!clicked);
  };

  return (
    <QuestionContainerStyled>
      <QuestionCard
        question={singleQuestion}
        fowardQuestion={fowardQuestion}
        clicked={clicked}
        setClicked={setClicked}
      />
    </QuestionContainerStyled>
  );
};

export default QuestionContainer;

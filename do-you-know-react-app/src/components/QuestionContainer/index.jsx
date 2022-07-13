import { useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { QuestionCard } from "../QuestionCard";
import { QuestionContainerStyled } from "./style";
//container é aquele card branco

const QuestionContainer = () => {
  const { listCategory, singleQuestion, changeQuestion, setCountQuestion } =
    useContext(UserContext);

  const history = useHistory();

  const [counter, setCounter] = useState(0);

  const [clicked, setClicked] = useState(false);

  counter === 0
    ? changeQuestion(listCategory[counter])
    : setTimeout(() => {
        changeQuestion(listCategory[counter]);
        setClicked(false);
      }, 900);

  const fowardQuestion = () => {
    if (counter >= 9) {
      console.log("aqui");
      history.push("/sucessful-questions");
      setCounter(9);
    } else {
      setCounter(counter + 1);
    }
    // counter >= 9 ? setCounter(9) : setCounter(counter + 1);
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

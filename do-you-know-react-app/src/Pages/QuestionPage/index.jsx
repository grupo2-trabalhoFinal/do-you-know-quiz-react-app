import { ExitButton } from "../../components/ExitButton";
import QuestionBackground from "../../components/QuestionBackground/style";
import QuestionContainer from "../../components/QuestionContainer";
import LOGO from "../../Assets/LOGO.svg";

//incluir o onclick no button

const QuestionPage = () => {
  return (
    <QuestionBackground>
      <img src={`${LOGO}`} alt="quiz logo" />
      <QuestionContainer />
      <ExitButton />
    </QuestionBackground>
  );
};

export default QuestionPage;

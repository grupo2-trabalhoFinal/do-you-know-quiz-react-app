import { useHistory } from 'react-douter-dom'
import { ExitButton } from "../../components/ExitButton";
import QuestionBackground from "../../components/QuestionBackground/style";
import QuestionContainer from "../../components/QuestionContainer";
import LOGO from "../../Assets/LOGO.svg";

//incluir o onclick no button

const QuestionPage = ({auth}) => {
  
  const history = useHistory();

  if (!auth) {
    history.push("/");
  }
  return (
    <QuestionBackground>
      <img src={`${LOGO}`} alt="quiz logo" />
      <QuestionContainer />
      <ExitButton />
    </QuestionBackground>
  );
};

export default QuestionPage;

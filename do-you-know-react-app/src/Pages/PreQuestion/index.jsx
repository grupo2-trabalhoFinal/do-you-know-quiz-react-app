import LOGO from "../../Assets/LOGO.svg";
import QuestionBackground from "../../components/QuestionBackground/style";

const PreQuestion = () => {
  return (
    <QuestionBackground>
      <img src={`${LOGO}`} alt="game logo" />
    </QuestionBackground>
  );
};

export default PreQuestion;

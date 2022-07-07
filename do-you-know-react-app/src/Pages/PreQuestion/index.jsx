import PreQuestionContainer from "./style";
import LOGO from "../../Assets/LOGO.svg";

const PreQuestion = () => {
  return (
    <PreQuestionContainer>
      <img src={`${LOGO}`} alt="game logo" />
    </PreQuestionContainer>
  );
};

export default PreQuestion;

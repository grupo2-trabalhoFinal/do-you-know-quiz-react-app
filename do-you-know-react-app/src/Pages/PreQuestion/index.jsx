import LOGO from "../../Assets/LOGO.svg";
import QuestionBackground from "../../components/QuestionBackground/style";
import { PreQuestionImgContainer } from "./style";

const PreQuestion = () => {
  return (
    <QuestionBackground>
      <PreQuestionImgContainer>
        <img src={`${LOGO}`} style={{ paddingRight: "15px" }} alt="game logo" />
      </PreQuestionImgContainer>
    </QuestionBackground>
  );
};

export default PreQuestion;

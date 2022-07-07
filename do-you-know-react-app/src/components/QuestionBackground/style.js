import styled from "styled-components";
import blueBackground from "../../Assets/blueBackground.svg";

const QuestionBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background: url(${blueBackground});
  background-repeat: no-repeat;
  background-color: #1e4e9d;
  background-size: cover;
`;

export default QuestionBackground;

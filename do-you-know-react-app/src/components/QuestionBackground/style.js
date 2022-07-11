import styled from "styled-components";
import blueBackground from "../../Assets/blueBackground.svg";

const QuestionBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;

  width: 100vw;
  height: 100%;

  background: url(${blueBackground});
  background-repeat: no-repeat;
  background-color: #1e4e9d;
  background-size: cover;

  img {
    width: 20%;
  }
`;

export default QuestionBackground;

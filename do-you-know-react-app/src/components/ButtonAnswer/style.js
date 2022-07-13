import styled from "styled-components";

export const StyledAnswerButton = styled.button`
  background-color: ${(props) => {
    if (props.clicked) {
      return props.isCorrect ? "#22A73F" : "#c76361";
    } else {
      return "#2257a7";
    }
  }};
  border: none;

  color: white;
  font-size: 1rem;

  border-radius: 50px;
  padding: 14px;
`;

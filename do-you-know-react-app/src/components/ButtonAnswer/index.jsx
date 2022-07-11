import { StyledAnswerButton } from "./style";

export const ButtonAnswer = ({ children, onClick }) => {
  return <StyledAnswerButton onClick={onClick}>{children}</StyledAnswerButton>;
};

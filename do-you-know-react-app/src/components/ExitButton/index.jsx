import { useHistory } from "react-router-dom";
import { StyledExitButton } from "./style";

export const ExitButton = () => {
  const history = useHistory();

  return (
    <StyledExitButton onClick={() => history.push("/category")}>
      SAIR
    </StyledExitButton>
  );
};

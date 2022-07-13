import { StyledButtonBack } from "./style";

import { useHistory } from "react-router-dom";

const ButtonBack = ({ route }) => {
  const history = useHistory();

  return (
    <StyledButtonBack onClick={() => history.push(`${route}`)}>
      voltar
    </StyledButtonBack>
  );
};

export default ButtonBack;

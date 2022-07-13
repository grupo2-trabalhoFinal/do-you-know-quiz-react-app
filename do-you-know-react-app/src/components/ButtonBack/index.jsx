import { StyledButtonBack } from "./style";

import { useHistory } from "react-router-dom";

const ButtonBack = ({ route, text }) => {
  const history = useHistory();

  return (
    <StyledButtonBack onClick={() => history.push(`${route}`)}>
      {text}
    </StyledButtonBack>
  );
};

export default ButtonBack;

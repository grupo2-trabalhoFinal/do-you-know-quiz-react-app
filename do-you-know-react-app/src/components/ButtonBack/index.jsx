import { StyledButtonBack } from "./style";

import { useHistory } from "react-router-dom";

const ButtonBack = ({
  route,
  text,
  backgroundColorButton,
  color,
  fontSizeText,
}) => {
  const history = useHistory();

  return (
    <StyledButtonBack
      backgroundColorButton={`${backgroundColorButton}`}
      color={`${color}`}
      fontSizeText={`${fontSizeText}`}
      onClick={() => {
        history.push(`${route}`);
        route === "/" && localStorage.clear();
      }}
    >
      {text}
    </StyledButtonBack>
  );
};

export default ButtonBack;

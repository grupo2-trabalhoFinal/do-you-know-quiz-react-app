import { StyledButtonBack } from "./style";

import { useHistory } from "react-router-dom";
import { useState } from "react";

const ButtonBack = ({
  setAuth,
  route,
  text,
  backgroundColorButton,
  color,
  fontSizeText,
  exit,
}) => {
  const history = useHistory();
  console.log(setAuth);

  const handleButton = () => {
    localStorage.clear();
    setAuth(false);
  };

  return (
    <StyledButtonBack
      backgroundColorButton={`${backgroundColorButton}`}
      color={`${color}`}
      fontSizeText={`${fontSizeText}`}
      onClick={() => handleButton()}
    >
      {text}
    </StyledButtonBack>
  );
};

export default ButtonBack;

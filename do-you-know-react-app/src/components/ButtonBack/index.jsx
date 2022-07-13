import { StyledButtonBack } from "./style";

import { useHistory } from "react-router-dom";
import { useState } from "react";

const ButtonBack = ({
  route,
  text,
  backgroundColorButton,
  color,
  fontSizeText,
  exit,
}) => {
  const history = useHistory();

  const handleButton = (route) => {
    // history.push(`${route}`);
    if (exit) {
      localStorage.clear();
    }
  };

  return (
    <StyledButtonBack
      backgroundColorButton={`${backgroundColorButton}`}
      color={`${color}`}
      fontSizeText={`${fontSizeText}`}
      onClick={() => handleButton(route)}
    >
      {text}
    </StyledButtonBack>
  );
};

export default ButtonBack;

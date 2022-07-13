import { StyledButtonBack } from "./style";

const ButtonBack = ({
  route,
  text,
  backgroundColorButton,
  color,
  fontSizeText,
  exit,
}) => {
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

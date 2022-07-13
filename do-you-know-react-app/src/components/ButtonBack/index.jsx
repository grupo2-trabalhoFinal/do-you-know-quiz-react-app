import { StyledButtonBack } from "./style";

const ButtonBack = ({
  setAuth,
  route,
  text,
  backgroundColorButton,
  color,
  fontSizeText,
  exit,
}) => {
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

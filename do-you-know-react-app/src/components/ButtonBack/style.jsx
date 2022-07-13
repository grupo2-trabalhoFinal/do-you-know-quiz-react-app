import styled from "styled-components";

export const StyledButtonBack = styled.button`
  min-width: 17rem;
  max-width: 18rem;

  font-size: ${(props) => props.fontSizeText || "1.1875rem"};
  font-weight: 300;
  line-height: 1.75rem;

  text-align: center;
  padding: 0.5rem 2.6875rem;
  margin-top: 1rem;

  border: none;
  border-radius: 0.875rem;

  background: ${(props) => props.backgroundColorButton || "#1E4E9D"};

  color: ${(props) => props.color || "#fff"};
`;

import styled from "styled-components";

export const StyledButtonBack = styled.button`
  font-size: 1.1875rem;
  font-weight: 300;
  line-height: 1.75rem;

  text-align: center;
  padding: 0.1875rem 2.6875rem;

  border: none;
  border-radius: 0.875rem;

  background: ${(props) => props.backgroundColorButton || "#1E4E9D"};
  color: ${(props) => props.color || "#fff"};
`;

import styled from "styled-components";

export const StyledButtonBack = styled.button`
  font-size: 19px;
  font-weight: 300;
  line-height: 28px;

  text-align: center;
  padding: 3px 43px;

  border: none;
  border-radius: 14px;

  background: ${(props) => props.backgroundColorButton || "#1E4E9D"};
  color: ${(props) => props.color || "#fff"};
`;

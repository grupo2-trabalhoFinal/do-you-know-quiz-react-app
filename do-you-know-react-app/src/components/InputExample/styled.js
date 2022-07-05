import styled from "styled-components";

export const Input = styled.input`
  box-sizing: border-box;
  width: ${(props) => props.width || "400px"};
  height: ${(props) => props.width || "30px"};

  outline: none;

  border: none;
  border-bottom: 2px solid #1e4e9d;

  color: #1e4e9d;

  font-weight: 400;

  padding: 1rem;
`;

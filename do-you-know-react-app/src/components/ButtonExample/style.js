import styled from "styled-components";

export const ButtonForms = styled.button`
  box-sizing: border-box;
  padding: 10px 80px;
  background-color: #1e4e9d;

  border-radius: 50px;
  color: white;
  border: 1px solid white;
  transition: 0.5s ease;

  font-size: 2rem;

  &:hover {
    background-color: #2af4fe;
    color: #1e4e9d;
    transition: 0.6s ease;
  }

  @media (min-width: 368px) {
    padding: 3px 50px;
  }
`;

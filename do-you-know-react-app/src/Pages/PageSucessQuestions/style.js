import styled from "styled-components";

export const StyledSucessQuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  width: 100vw;
  height: 100vh;

  background-color: #eeeeee;
  color: #1e4e9d;

  button {
    height: auto;
  }

  img {
    width: 50vw;
    margin-left: 20px;
  }

  h2 {
    font-size: 3rem;
    text-align: center;

    max-width: 90vw;
  }
  h3 {
    font-size: 2rem;
  }
  div {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    img {
      width: 20vw;
    }

    h2 {
      font-size: 2rem;
    }
  }
`;

export const StyledBackButton = styled.button`
  height: 3rem;
  width: 80vw;

  background-color: #1e4e9d;
  color: white;

  border-radius: 50px;
  border: 1px solid white;

  font-size: 1.5rem;
  font-weight: 300;

  transition: 0.4s ease;

  &:hover {
    background-color: #2af4fe;
    color: #1e4e9d;

    border: 3px solid white;

    transition: 0.6s ease;
  }

  @media (min-width: 1024px) {
    width: 30vw;
  }
`;

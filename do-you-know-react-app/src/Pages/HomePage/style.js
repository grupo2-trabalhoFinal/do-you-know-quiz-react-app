import styled from "styled-components";
import background from "../../Assets/background.svg";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

  width: 100vw;
  height: 100vh;

  background: url(${background});
  background-repeat: no-repeat;
  background-color: #1e4e9d;
  background-size: cover;

  img {
    margin-right: 25px;
  }
`;

export const GoToRegisterButton = styled.button`
  height: 3.3rem;
  width: 70vw;

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
`;

export const GoToLoginButton = styled(GoToRegisterButton)`
  background-color: white;
  color: #1e4e9d;
`;

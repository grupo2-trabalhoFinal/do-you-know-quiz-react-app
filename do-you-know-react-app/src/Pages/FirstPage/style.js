import styled from "styled-components";
import background from "../../Assets/background.svg";

export const FirstPageContainer = styled.div`
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

  .person {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-size: 2rem;
  }

  & > img {
    width: 35vw;
  }

  & > div > img {
    width: 20vw;
  }

  @media (min-width: 1024px) {
    img {
      width: 20vw;
    }

    div > img {
      width: 10vw;
    }
  }
`;
export const ButtonFirstPage = styled.button`
  height: 6rem;
  width: 70vw;

  background-color: white;
  color: #1e4e9d;

  border-radius: 20px;
  border: 1px solid white;

  font-size: 3rem;
  font-weight: 800;

  transition: 0.4s ease;

  &:hover {
    background-color: #2af4fe;
    color: #1e4e9d;
    border-style: none;

    transition: 0.6s ease;
  }

  @media (min-width: 1024px) {
    height: 3rem;
    width: 35vw;

    font-size: 2rem;
  }
`;

import styled from "styled-components";
import rankingBackground from "../../Assets/rankingBackground.svg";

export const RegisterContainer = styled.div `
  background: url(${rankingBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 15px;

  width: 100vw;
  max-height: 100vh;

  background-color: #eeeeee;

  img {
    width: 45vw;
  }

  span {
    color: brown;
    font-size: 0.9rem;
  }

  @media (min-width: 500px) {
    img {
      width: 45vw;
    }
  }

  @media (min-width: 924px) {
    img {
      width: 25vw;
    }
  }
`;

export const ContentRanking = styled.div `
  max-height: 100vh;
  overflow: scroll-y;

  box-sizing: border-box;
  padding: 15px 35px;
  background-color: white;

  border-radius: 50px;
  box-shadow: 61px 24px 80px rgba(0, 0, 0, 0.25);
  color: #1e4e9d;
  border: 1px solid white;
  transition: 0.5s ease;

  font-size: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  img {
    width: 10vw;
  }
  h2 {
    width: 10vw;
  }

  @media (min-width: 550px) {
    padding: 10px 110px;
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 10px 180px;
    font-size: 1.5rem;
    img {
      width: 5vw;
    }
  }
`;

export const RegisterHeader = styled.header `
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  height: 50px;

  button {
    cursor: pointer;
    width: 8rem;
    height: 2.5rem;

    border-radius: 50px;
    border: none;

    font-size: 0.9rem;
    font-weight: 400;

    background-color: #d9d9d9;

    transition: 0.6s ease;

    &:hover {
      box-shadow: 0px 0px 5px darkgray;
      transition: 0.6s ease;
    }
  }

  @media (min-width: 800px) {
    button {
      height: 3.5rem;
      width: 10rem;
      font-size: 1.5rem;
    }
  }

  @media (min-width: 924px) {
    button {
      height: 2.5rem;
      width: 8rem;
    }
  }
`;

export const RegisterForm = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  width: 75vw;

  input {
    width: 100%;
    height: 1.5rem;
    padding: 0;
  }

  label {
    color: #1e4e9d;
    font-weight: 700;
  }

  div {
    display: flex;
    justify-content: center;

    width: 100%;
    margin-top: 20px;
  }

  @media (min-width: 750px) {
    label {
      font-size: 1.1rem;
    }

    input {
      width: 100%;

      padding: 0;
    }

    div {
      margin-top: 15px;
    }
  }

  @media (min-width: 900px) {
    width: 50vw;

    input {
      height: 1.5rem;
      font-size: 1.3rem;
    }
  }
`;

export const RegisterButton = styled.button `
  height: 2.5rem;
  width: 80vw;

  background-color: #1e4e9d;
  color: white;

  border-radius: 50px;
  border: 1px solid white;
  box-shadow: -5px 5px 15px 3px gray;

  font-size: 1.5rem;
  font-weight: 300;

  transition: 0.4s ease;

  &:hover {
    background-color: #2af4fe;
    color: #1e4e9d;

    border: 3px solid white;

    transition: 0.6s ease;
  }

  @media (min-width: 800px) {
    width: 60vw;
    height: 4rem;
  }
  @media (min-width: 900px) {
    height: 3rem;
    width: 80%;
  }
`;
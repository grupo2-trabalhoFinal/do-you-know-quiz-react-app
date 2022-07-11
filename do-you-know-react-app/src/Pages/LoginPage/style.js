import styled from "styled-components";

export const RegisterContainer = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  padding: 25px;

  width: 100vw;
  height: 100vh;

  background-color: #eeeeee;

  img {
    width: 80vw;
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

  @media (min-width: 1024px) {
    img {
      width: 25vw;
    }
  }
`;

export const RegisterHeader = styled.header`
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

  @media (min-width: 1024px) {
    button {
      width: 8.5rem;
      height: 3rem;
    }
  }
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  width: 75vw;
  height: 40vh;

  input {
    width: 100%;
    height: 2rem;
    padding: 0;
  }

  label {
    color: #1e4e9d;
    font-weight: 700;
    font-size: 1rem;
  }

  div {
    display: flex;
    justify-content: center;

    width: 100%;
    margin-top: 25px;
  }

  @media (min-width: 750px) {
    label {
      font-size: 1.5rem;
    }

    input {
      width: 100%;
      height: 2rem;
      padding: 0;
    }
  }

  @media (min-width: 1024px) {
    width: 40vw;
  }
`;

export const RegisterButton = styled.button`
  height: 3rem;
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
    height: 3.5rem;
  }
`;

import styled from "styled-components";
export const StyledContainerList = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 15px;
  background-color: #eeeeee;
  min-height: 100vh;
  max-height: 200vh;

  img {
    width: 30%;
  }
  ul {
    width: 90vw;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8rem;
    width: 80%;
    height: 100%;
    border-radius: 3.4125rem;
    padding: 0.2rem 0.7rem;
    border: 1px solid #eeeeee;
    box-shadow: 5px 0 9px -5px #333;
    img {
      width: 14px;
    }
  }
  h2 {
    font-weight: 600;
    color: #2257a7;
    letter-spacing: 3px;
  }
  h3 {
    color: #818181;
  }
  p {
    font-size: 1.48125rem;
    font-weight: 800;
    margin: 0 auto;
    height: 100%;
    color: #1e4e9d;
  }

  @media (min-width: 1024px) {
    img {
      width: 20%;
    }
  }
`;
export const StyledContainerItem = styled.div`
  height: 2.5rem;
  border-radius: 3.4125rem;
  margin-bottom: 0.5rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledButton = styled.button`
  font-size: 1.3rem;
  font-weight: 300;
  padding: 0.3rem 0.7rem;
  color: #fff;
  background-color: #1e4e9d;
  border: none;
  border-radius: 1.2rem;
`;

import styled from "styled-components";

export const PreQuestionImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  img {
    width: 70vw;
  }

  @media (min-width: 1024px) {
    img {
      width: 40vw;
    }
  }
`;

import styled from "styled-components";

export const StyledQuestionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  button {
    min-width: 17rem;
    line-height: 1.75rem;
    text-align: center;
    font-weight: bolder;
    font-size: 1rem;

    width: 90%;
  }

  h3 {
    color: #2257a7;
    font-size: 1.5rem;
    text-align: center;
  }

  @media (max-width: 320px) {
    button {
      min-width: 15rem;
    }
  }
`;

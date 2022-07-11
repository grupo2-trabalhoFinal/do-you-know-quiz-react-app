import styled from "styled-components";
import background from "../../Assets/background.svg";

export const StyledCategoryPage = styled.div`
  padding: 1.33rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  min-width: 100vw;
  min-height: 100vh;

  background: url(${background}) no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 321px) {
    width: 100%;
    padding: 3rem;
  }
`;

export const ContainerListCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

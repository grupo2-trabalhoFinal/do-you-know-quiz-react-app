import styled from "styled-components";
import background from "../../Assets/background.svg";

export const StyledCategoryPage = styled.div`
  padding: 1.33rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  min-width: 20rem;
  min-height: 27.5rem;

  background: url(${background});
  background-size: cover;
`;

export const ContainerListCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

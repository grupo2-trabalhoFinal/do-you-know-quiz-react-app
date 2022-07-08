import ButtonCategory from "../../components/ButtonCategory";
import TitleCategory from "../../components/TitleCategory";
import { GlobalContainer } from "../../styles/global";
import { ContainerListCategory, StyledCategoryPage } from "./style.jsx";

const CategoryPage = () => {
  return (
    <GlobalContainer>
      <StyledCategoryPage>
        <TitleCategory>Categoria</TitleCategory>
        <ContainerListCategory>
          <ButtonCategory>HTML</ButtonCategory>
          <ButtonCategory>CSS</ButtonCategory>
          <ButtonCategory>JavaScript</ButtonCategory>
          <ButtonCategory>React</ButtonCategory>
          <ButtonCategory>Api's</ButtonCategory>
        </ContainerListCategory>
      </StyledCategoryPage>
    </GlobalContainer>
  );
};

export default CategoryPage;

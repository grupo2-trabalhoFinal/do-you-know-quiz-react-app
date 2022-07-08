import { useState } from "react";
import ButtonCategory from "../../components/ButtonCategory";
import TitleCategory from "../../components/TitleCategory";
import { GlobalContainer } from "../../styles/global";
import { ContainerListCategory, StyledCategoryPage } from "./style.jsx";

const CategoryPage = () => {
  const [listCategorys, setLisCategorys] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Api",
  ]);
  return (
    <GlobalContainer>
      <StyledCategoryPage>
        <TitleCategory>Categoria</TitleCategory>

        <ContainerListCategory>
          {listCategorys.map((category, index) => {
            return (
              <ButtonCategory category={category} key={index}>
                {category}
              </ButtonCategory>
            );
          })}
        </ContainerListCategory>
      </StyledCategoryPage>
    </GlobalContainer>
  );
};

export default CategoryPage;

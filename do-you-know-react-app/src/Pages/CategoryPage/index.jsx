import { useState } from "react";
import { Redirect } from "react-router-dom";
import ButtonCategory from "../../components/ButtonCategory";
import TitleCategory from "../../components/TitleCategory";
import { GlobalContainer } from "../../styles/global";
import { ContainerListCategory, StyledCategoryPage } from "./style.jsx";

const CategoryPage = ({auth,setAuth}) => {
  const [listCategorys, setLisCategorys] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Api",
  ]);

  if(!auth){
    <Redirect to = "/"/>
  }
  return (
    <GlobalContainer>
      <StyledCategoryPage>
        <TitleCategory>Categoria</TitleCategory>

        <ContainerListCategory>
          {listCategorys.map((category, index) => {
            return (
              <ButtonCategory category={category} key={index}>
                category
              </ButtonCategory>
            );
          })}
        </ContainerListCategory>
      </StyledCategoryPage>
    </GlobalContainer>
  );
};

export default CategoryPage;

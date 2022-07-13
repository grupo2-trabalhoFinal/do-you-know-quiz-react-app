import { useState } from "react";
import { useHistory } from "react-router-dom";
import ButtonBack from "../../components/ButtonBack";
import ButtonCategory from "../../components/ButtonCategory";
import TitleCategory from "../../components/TitleCategory";

import { GlobalContainer } from "../../styles/global";
import { ContainerListCategory, StyledCategoryPage } from "./style.jsx";

const CategoryPage = ({ auth }) => {
  const [listCategorys, setLisCategorys] = useState([
    "Html",
    "CSS",
    "Javascript",
    "React",
    "Api",
  ]);

  const history = useHistory();

  if (!auth) {
    history.push("/");
  }

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
        <ButtonBack route={"/home"} text={"voltar"} />
      </StyledCategoryPage>
    </GlobalContainer>
  );
};

export default CategoryPage;

import { useState } from "react";
import { useHistory } from "react-router-dom";
import ButtonCategory from "../../components/ButtonCategory";
import TitleCategory from "../../components/TitleCategory";
import "./style.css";
import { motion } from "framer-motion";

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

  function handleClick() {
    history.push("/home");
  }

  return (
    <motion.div
      initial={{ x: 250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4 }}
    >
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
          <button className="button" onClick={() => handleClick()}>
            Voltar
          </button>
        </StyledCategoryPage>
      </GlobalContainer>
    </motion.div>
  );
};

export default CategoryPage;

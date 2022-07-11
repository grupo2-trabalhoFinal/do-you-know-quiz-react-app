import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import api from "../../services/api";
import { StyledButtonCategory } from "./style";

const ButtonCategory = ({ children, category }) => {
  const { listCategory, setListCategory } = useContext(UserContext);
  const history = useHistory();

  async function handleClickCategory(category) {
    setListCategory([]);
    const Api = await api
      .get(`/questions?category=${category}`)
      .then((res) => setListCategory([...res.data]))
      .catch((error) => console.log(error));

    history.push("/question");
    return Api;
  }

  console.log(listCategory);
  return (
    <StyledButtonCategory onClick={() => handleClickCategory(category)}>
      {children}
    </StyledButtonCategory>
  );
};

export default ButtonCategory;

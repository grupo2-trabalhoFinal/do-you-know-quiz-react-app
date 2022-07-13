import {
  RegisterContainer,
  RegisterForm,
  RegisterHeader,
  RegisterButton,
} from "./style";
import Logo from "../../Assets/LOGO.svg";
import InputExample from "../../components/InputExample";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import api from "../../services/api";
import { toast } from "react-toastify";
import { TokenContext } from "../../context/TokenContent";

const LoginPage = ({ auth, setAuth }) => {
  const { userName, changeName } = useContext(UserContext);
  const { token, changeToken } = useContext(TokenContext);
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email obrigatório !")
      .email("Formato de email inválido !"),

    password: yup
      .string()
      .required("Senha obrigatória !")
      .min(8, "Necessário de no mínimo 8 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitedForm = (data) => {
    api
      .post("/login", data)
      .then((response) => {

        const token = response.data.accessToken;
        changeName(response.data.user.name);
        localStorage.setItem(
          "@userName",
          JSON.stringify(response.data.user.name)
        );
        localStorage.setItem("@quizToken", JSON.stringify(token));
        setAuth(true);

        console.log(response);
        const id = response.data.user.id;
        localStorage.setItem("@quizId", JSON.stringify(id));

        return history.push("/category");

      })
      .catch((err) => toast.error("Confira os dados e tente novamente"));
  };

  if (auth) {
    history.push("/home");
  }

  return (
    <RegisterContainer>
      <RegisterHeader>
        <button onClick={() => history.push("/")}>VOLTAR</button>
      </RegisterHeader>

      <img src={Logo} alt="Logo da página"></img>

      <RegisterForm onSubmit={handleSubmit(submitedForm)}>
        <label>
          EMAIL {errors.email && <span>- {errors.email.message}</span>}
        </label>
        <InputExample
          name="email"
          register={register}
          placeholder="Seu email !"
        ></InputExample>

        <label>
          SENHA {errors.password && <span>- {errors.password.message}</span>}
        </label>
        <InputExample
          name="password"
          register={register}
          placeholder="************"
          type="password"
        ></InputExample>

        <div>
          <RegisterButton type="submit">LOGIN</RegisterButton>
        </div>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default LoginPage;

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
import api from "../../services/api";
import { toast } from "react-toastify";

const LoginPage = () => {
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
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitedForm = (data) => {
    api
      .post("/login", data)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("@quizToken", JSON.stringify(token));

        return history.push("/");
      })
      .catch((err) => toast.error("Confira os dados e tente novamente"));
  };

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

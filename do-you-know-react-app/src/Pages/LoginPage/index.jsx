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

const LoginPage = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    Username: yup
      .string()
      .required("Usuário obrigatório !")
      .min(3, "Mínimo de 3 caractéres !"),

    Password: yup
      .string()
      .required("Senha obrigatória !")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
        "Necessário de no mínimo 8 caracteres, uma letra maiúscula, uma minúscula e um número !"
      ),
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
    reset();
    console.log(data);
  };

  return (
    <RegisterContainer>
      <RegisterHeader>
        <button onClick={() => history.push("/")}>VOLTAR</button>
      </RegisterHeader>

      <img src={Logo} alt="Logo da página"></img>

      <RegisterForm onSubmit={handleSubmit(submitedForm)}>
        <label>
          USUÁRIO {errors.Username && <span>- {errors.Username.message}</span>}
        </label>
        <InputExample
          name="Username"
          register={register}
          placeholder="Choose a username !"
        ></InputExample>

        <label>
          SENHA {errors.Password && <span>- {errors.Password.message}</span>}
        </label>
        <InputExample
          name="Password"
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

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
import { UserContext } from "../../context/UserContext"


const RegisterPage = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    Username: yup
      .string()
      .required("Usuário obrigatório !")
      .min(3, "Mínimo de 3 caractéres !"),

    Email: yup
      .string()
      .required("Email obrigatório !")
      .email("Formato de email inválido !"),

    Password: yup
      .string()
      .required("Senha obrigatória !")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
        "Necessário de no mínimo 8 caracteres, uma letra maiúscula, uma minúscula e um número !"
      ),

    ConfirmPassword: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("Password")], "As senhas devem ser identicas !"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {userName, changeName} = useContext(UserContext)
  
  const submitedForm = (data) => {
    
      changeName(data.Username);
    
  history.push("/home",data);
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
          EMAIL {errors.Email && <span>- {errors.Email.message}</span>}
        </label>
        <InputExample
          name="Email"
          register={register}
          placeholder="Email address !"
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

        <label>
          CONFIRMAR SENHA{" "}
          {errors.ConfirmPassword && (
            <span>- {errors.ConfirmPassword.message}</span>
          )}
        </label>
        <InputExample
          name="ConfirmPassword"
          register={register}
          placeholder="************"
          type="password"
        ></InputExample>

        <div>
          <RegisterButton type="submit">CADASTRAR</RegisterButton>
        </div>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default RegisterPage;

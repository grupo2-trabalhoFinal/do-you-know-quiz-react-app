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

const RegisterPage = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Usuário obrigatório !")
      .min(3, "Mínimo de 3 caractéres !"),

    email: yup
      .string()
      .required("Email obrigatório !")
      .email("Formato de email inválido !"),

    password: yup
      .string()
      .required("Senha obrigatória !")
      .min(8, "Necessário de no mínimo 8 caracteres"),

    confirmPassword: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("password")], "As senhas devem ser identicas !"),

    age: yup.string().required("Idade obrigatoria"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitedForm = ({ email, password, name, age }) => {
    const user = { email, password, name, age };
    api
      .post("/register", user)
      .then((response) => {
        toast.success("Conta criada com sucesso");
        return history.push("/successful-register");
      })
      .catch((err) => toast.error("Erro ao criar a conta"));
  };

  return (
    <RegisterContainer>
      <RegisterHeader>
        <button onClick={() => history.push("/")}>VOLTAR</button>
      </RegisterHeader>

      <img src={Logo} alt="Logo da página"></img>

      <RegisterForm onSubmit={handleSubmit(submitedForm)}>
        <label>
          USUÁRIO {errors.name && <span>- {errors.name.message}</span>}
        </label>
        <InputExample
          name="name"
          register={register}
          placeholder="Crie seu nome de usuario !"
        ></InputExample>

        <label>
          EMAIL {errors.email && <span>- {errors.email.message}</span>}
        </label>
        <InputExample
          name="email"
          register={register}
          placeholder="Seu email !"
        ></InputExample>

        <label>
          IDADE
          {errors.age && <span>- {errors.age.message}</span>}
        </label>
        <InputExample
          name="age"
          register={register}
          placeholder="Sua idade"
          type="text"
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

        <label>
          CONFIRMAR SENHA{" "}
          {errors.confirmPassword && (
            <span>- {errors.confirmPassword.message}</span>
          )}
        </label>
        <InputExample
          name="confirmPassword"
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

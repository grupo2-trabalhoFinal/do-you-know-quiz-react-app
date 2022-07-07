import { Input } from "./styled";

const InputExample = ({ placeholder, register, name, ...rest }) => {
  return <Input placeholder={placeholder} {...register(name)} {...rest} />;
};

export default InputExample;

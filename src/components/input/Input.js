import styled from "@emotion/styled";

const InputCSS = styled.input`
  background-color: ${({ theme }) => (theme === "light" ? "white" : "#282936")};
  color: ${({ theme }) =>
    theme === "light" ? "#282936" : "rgb(239, 242, 245)"};
  box-shadow: rgb(88 102 126 / 8%) 0px 4px 24px,
    rgb(88 102 126 / 12%) 0px 1px 2px;
  padding: 20px;
  border: 1px solid transparent;
  border-radius: 10px;
  margin-bottom: 30px;
  max-width: 500px;
`;

const Input = ({ theme, onChange, type, name, placeholder, props }) => (
  <InputCSS
    theme={theme}
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    {...props}
  />
);

export default Input;

import styled from "@emotion/styled";

const ButtonCheckboxCSS = styled.div`
  background-color: ${({ theme }) => (theme === "light" ? "white" : "#282936")};
  color: ${({ theme }) =>
    theme === "light" ? "#282936" : "rgb(239, 242, 245)"};
  box-shadow: rgb(88 102 126 / 8%) 0px 4px 24px,
    rgb(88 102 126 / 12%) 0px 1px 2px;
  padding: 10px 20px 10px 20px;
  border: 1px solid transparent;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-right: 15px;
  max-width: 500px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

function ButtonCheckbox({ title, theme, children, onClick }) {
  return (
    <ButtonCheckboxCSS theme={theme} onClick={onClick}>
      {title}
      {children}
    </ButtonCheckboxCSS>
  );
}

export default ButtonCheckbox;

import styled from "@emotion/styled";

const ButtonToggleThemeWrapper = styled.div`
  cursor: pointer;
  background-color: transparent;
  padding: 20px;
  width: 20px;
  height: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;
const ButtonToggleTheme = ({ text, onClick, theme }) => {
  return (
    <ButtonToggleThemeWrapper onClick={onClick} type="button" theme={theme}>
      {text}
    </ButtonToggleThemeWrapper>
  );
};

export default ButtonToggleTheme;

import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const ButtonTagCSS = styled.div`
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
  cursor: pointer;
  list-style: none;
  display: inline-flex;
  font-weight: 600;
  font-size: 14px;

  &:hover {
    background-color: ${({ theme }) =>
      theme === "light" ? "#EFEFEF" : "#37384a"};
  }
  > a {
    &:link,
    &:visited {
      color: ${({ theme }) => (theme === "light" ? "#20313c" : "white")};
      text-decoration: none;
    }
  }
`;

function ButtonTag({ title, theme, to, children, onClick }) {
  return (
    <ButtonTagCSS theme={theme} onClick={onClick}>
      <NavLink to={to}>
        {title}
        {children}
      </NavLink>
    </ButtonTagCSS>
  );
}

export default ButtonTag;

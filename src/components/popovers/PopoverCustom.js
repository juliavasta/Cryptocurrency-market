import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { useState } from "react";

const PopoverCustomCSS = styled.div`
  background-color: ${({ theme }) => (theme === "light" ? "white" : "#1b1c24")};
  color: ${({ theme }) =>
    theme === "light" ? "#282936" : "rgb(239, 242, 245)"};
  padding: 10px;
  text-align: center;
  color: #fff;
  font-size: 12px;
  border-radius: 10px;
  background-color: #1b1c24;
  position: absolute;
  left: 0;
  bottom: -10px;
  transform: translate(0%, 30);
`;

function isFn(value) {
  return typeof value === "function";
}

function PopoverCustom({ children, title, theme }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      theme={theme}
      className={css`
        position: relative;
      `}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      {children}
      {isHover && title ? (
        <PopoverCustomCSS theme={theme}>
          {isFn(title) ? title() : title}
        </PopoverCustomCSS>
      ) : null}
    </div>
  );
}

export default PopoverCustom;

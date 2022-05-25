import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { useState } from "react";

const PopoverCSS = styled.div`
  white-space: nowrap;
  padding: 6px;
  text-align: center;
  font-size: 12px;
  border-radius: 10px;
  position: absolute;
  transform: translate(0%, 30);
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
`;

function isFn(value) {
  return typeof value === "function";
}

function Popover({ children, title, color, background, bottom, left, right }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
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
        <PopoverCSS
          color={color}
          background={background}
          bottom={bottom}
          left={left}
          right={right}
        >
          {isFn(title) ? title() : title}
        </PopoverCSS>
      ) : null}
    </div>
  );
}

export default Popover;

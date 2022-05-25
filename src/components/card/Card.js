import { css } from "@emotion/css";
import styled from "@emotion/styled";

const CardCSS = styled.div`
  box-shadow: rgb(88 102 126 / 8%) 0px 4px 24px,
    rgb(88 102 126 / 12%) 0px 1px 2px;
  background-color: ${({ theme }) =>
    theme === "light" ? "white" : "#282936;"};
  color: ${({ theme }) => (theme === "light" ? "#282936" : "white")};
  list-style: none;
  border-radius: 10px;
  padding: 30px;

  @media (max-width: 670px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const headerCSS = css`
  display: flex;
  align-items: center;
`;

const avatarImgCSS = css`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

const avatarNameCSS = css`
  font-weight: bold;
  margin-left: 20px;
`;

const Card = ({ alt, id, avatarUrl, title, children, theme }) => (
  <CardCSS key={id} theme={theme}>
    <div className={headerCSS}>
      {avatarUrl && (
        <img src={avatarUrl} alt={alt || "avatar"} className={avatarImgCSS} />
      )}
      <span className={avatarNameCSS}>{title}</span>
    </div>
    <div
      className={css`
        margin-top: 30px;
      `}
    >
      {children}
    </div>
  </CardCSS>
);

const infoCSS = css`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const infoTitleCSS = css`
  font-weight: bold;
  margin-right: 20px;

  @media (max-width: 500px) {
    margin-bottom: 20px;
  }
`;

const Info = ({ title, text, lines }) => (
  <div className={infoCSS}>
    <span className={infoTitleCSS}>{title}</span>
    <div>
      {text !== undefined && <span>{text}</span>}
      {lines !== undefined && lines.length === 0 && <span>No items</span>}
      {!!lines && lines.length > 0 && (
        <ul
          className={css`
            list-style: none;
          `}
        >
          {lines.map((line, i) => (
            <li key={i}>
              <span>{line.label}</span>
              <span>{line.value}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

Card.Info = Info;

export default Card;

import { css } from "@emotion/css";
import styled from "@emotion/styled";

const HighlightsCardCSS = styled.div`
  background-color: ${({ theme }) => (theme === "light" ? "white" : "#282936")};
  color: ${({ theme }) => (theme === "light" ? "black" : "#fff")};
  box-shadow: rgb(88 102 126 / 8%) 0px 4px 24px,
    rgb(88 102 126 / 12%) 0px 1px 2px;
  border-radius: 8px;
  list-style: none;
  width: 448px;
  padding: 14px 16px 17px;
  max-width: 448px;
  margin-right: 15px;

  @media (max-width: 1120px) {
    margin-bottom: 20px;
    width: 100%;
    max-width: 100%;
    margin-right: 0;
  }
`;

const highlightsCardTitelCSS = css`
  font-weight: bold;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const highlightsCardImgCSS = css`
  margin-right: 15px;
`;

const highlightsCardLabelCSS = css`
  margin-right: 10px;
`;

const HighlightsCard = ({ img, label, items, theme }) => (
  <HighlightsCardCSS theme={theme}>
    <div className={highlightsCardTitelCSS}>
      <span className={highlightsCardImgCSS}>{img}</span>
      <span className={highlightsCardLabelCSS}>{label}</span>
    </div>
    <div>{items}</div>
  </HighlightsCardCSS>
);

export default HighlightsCard;

import { css } from "@emotion/css";

const highlightsDataCSS = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const highlightsTitleCSS = css`
  display: flex;
`;

const highlightsRankCSS = css`
  margin-right: 10px;
`;

const highlightsNameCSS = css`
  margin-right: 10px;
`;

const highlightsSymbolCSS = css`
  margin-right: 10px;

  @media (max-width: 375px) {
    display: none;
  }
`;

const highlightsPriceCSS = css`
  display: flex;
`;

const HighlightsData = ({ rank, name, symbol, price }) => (
  <div className={highlightsDataCSS}>
    <div className={highlightsTitleCSS}>
      <span className={highlightsRankCSS}>{rank}</span>
      <div className={highlightsNameCSS}>{name}</div>
      <div className={highlightsSymbolCSS}>{symbol}</div>
    </div>
    <div className={highlightsPriceCSS}>{price}</div>
  </div>
);

export default HighlightsData;

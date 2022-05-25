import { css } from "@emotion/css";
import React, { useState } from "react";

import { highlights } from "dataStructures";
import { useGainers } from "data/useGainers";
import { useRecents } from "data/useRecents";
import { useTrendings } from "data/useTrendings";
import ButtonToggleOn from "components/buttons/ButtonToggleOn";
import HighlightsCard from "components/highlights/HighlightsCard";
import HighlightsData from "components/highlights/HighlightsData";
import { useThemeContext } from "context/ThemeContext";

const highlightsWrapperCSS = css`
  margin-bottom: 30px;
`;

const highlightsCSS = css`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 642px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const highlightsButtonCSS = css`
  display: flex;
  align-items: center;

  span {
    color: #5f6368;
    font-size: 15px;
  }
`;

const highlightSwitchOn = css`
  display: flex;

  @media (max-width: 1120px) {
    flex-direction: column;
  }
`;

const highlightSwitchOff = css`
  display: none;
`;

function Highlights() {
  const { theme } = useThemeContext();

  const [highlightSwitch, setHighlightSwitch] = useState(true);
  const { results: gainers = [] } = useGainers();
  const { results: recents = [] } = useRecents();
  const { results: trendings = [] } = useTrendings();

  const getTrendingsData = trendings.map((trend, i) => (
    <HighlightsData
      key={i}
      rank={trend.rank}
      name={trend.name}
      symbol={trend.symbol}
      price={trend.last_price}
    />
  ));

  const getGainersData = gainers.map((gainer, i) => (
    <HighlightsData
      key={i}
      rank={gainer.rank}
      name={gainer.name}
      symbol={gainer.symbol}
      price={gainer.last_price}
    />
  ));

  const getRecentsData = recents.map((recent, i) => (
    <HighlightsData
      key={i}
      rank={recent.rank}
      name={recent.name}
      symbol={recent.symbol}
      price={recent.last_price}
    />
  ));

  return (
    <div className={highlightsWrapperCSS}>
      <div className={highlightsCSS}>
        <h1
          className={css`
            font-size: 28px;

            @media (max-width: 642px) {
              margin-bottom: 20px;
            }
          `}
        >
          Today's Stock Prices
        </h1>

        <div className={highlightsButtonCSS}>
          <ButtonToggleOn
            onChange={() => setHighlightSwitch(!highlightSwitch)}
          />
        </div>
      </div>
      <div
        className={
          highlightSwitch ? `${highlightSwitchOn}` : `${highlightSwitchOff}`
        }
      >
        {highlights.map((item, i) => {
          return (
            <HighlightsCard
              theme={theme}
              key={i}
              img={item.img}
              label={item.label}
              items={
                item.highlightId === 1
                  ? getTrendingsData
                  : item.highlightId === 2
                  ? getGainersData
                  : getRecentsData
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default Highlights;

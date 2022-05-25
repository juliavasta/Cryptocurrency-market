import React, { useRef } from "react";
import { useState } from "react";
import { css } from "@emotion/css";
import { TableOutlined } from "@ant-design/icons";

import "../styles.css";
import { useTickers } from "data/useTickers";

import TableStock, {
  columns as defaultColumns,
  columnValues
} from "components/table/TableStock";
import ButtonTag from "components/buttons/ButtonTag";
import Highlights from "components/highlights/Highlights";
import { useThemeContext } from "context/ThemeContext";
import Input from "components/input/Input";
import Dropdown from "components/dropdowns/Dropdown";
import useOutsideClick from "hooks/useOutsideClick";

export function sortByString(a, b, asc) {
  if (a < b) {
    return asc ? -1 : 1;
  }
  if (a > b) {
    return asc ? 1 : -1;
  }
  return 0;
}

export function sortByNumber(a, b, asc) {
  return asc ? a - b : b - a;
}

export function getSortedProducts(products, sortBy, sortByAsc) {
  if (!sortBy) {
    return products;
  }

  return products.slice().sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];
    const fn = isNaN(aValue) ? sortByString : sortByNumber;

    return fn(aValue, bValue, sortByAsc);
  });
}

export const alerts = {
  RCN: { [columnValues.circulatingSupply]: "cC" },
  ETH: { [columnValues.cmcRank]: "Eth is going up!" },
  BTC: { [columnValues.cmcRank]: "BTC is going up!" }
};

function Stocks() {
  const ref = useRef();
  const { theme } = useThemeContext();
  const [searchText, setSearchText] = useState("");
  const { results: tickers = [] } = useTickers();
  const [sortBy, setSortBy] = useState("cmc_rank");
  const [sortByAsc, setSortByAsc] = useState(true);
  const [selected, setSelected] = useState(defaultColumns);
  const [customOpen, setCustomOpen] = useState(false);

  useOutsideClick(ref, () => {
    setCustomOpen(false);
  });

  const handleSearch = (e) => {
    setSearchText(e.currentTarget.value);
  };

  const filteredStock = tickers.filter((ticker) => {
    const text = searchText.toLowerCase();

    return (
      ticker.cmc_rank.toLowerCase().includes(text) ||
      ticker.name.toLowerCase().includes(text) ||
      ticker.symbol.toLowerCase().includes(text)
    );
  });

  const sortedList = getSortedProducts(filteredStock, sortBy, sortByAsc);

  return (
    <div>
      <div>
        <Input
          theme={theme}
          type="search"
          name="name"
          placeholder="Search all assets"
          onChange={handleSearch}
        />
      </div>
      <div>
        <Highlights />
        <ButtonTag title="Stock" theme={theme} to="/" />
        <ButtonTag title="Watchlist" theme={theme} to="/Watchlist" />
        <ButtonTag title="Rewards" theme={theme} to="/Rewards" />
        <ButtonTag
          title={<TableOutlined />}
          theme={theme}
          to="/"
          onClick={(e) => {
            e.stopPropagation();
            setCustomOpen(!customOpen);
          }}
        >
          {customOpen && (
            <div
              ref={ref}
              className={css`
                display: inline;
              `}
            >
              <Dropdown
                setSelected={setSelected}
                theme={theme}
                options={defaultColumns}
                selected={selected}
                onChange={setSelected}
              />
            </div>
          )}

          <p
            className={css`
              display: inline;
              margin-left: 10px;
            `}
          >
            Custom
          </p>
        </ButtonTag>
      </div>

      <TableStock
        columns={selected}
        theme={theme}
        alerts={alerts}
        tickers={sortedList}
        onSort={(sortBy, sortByAsc) => {
          setSortBy(sortBy);
          setSortByAsc(sortByAsc);
        }}
        sortByAsc={sortByAsc}
        sortBy={sortBy}
      />
    </div>
  );
}

export default Stocks;

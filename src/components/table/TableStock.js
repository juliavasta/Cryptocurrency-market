import { css } from "@emotion/css";
import styled from "@emotion/styled";

import TableHeader from "components/table/TableHeader";
import TableBody from "components/table/TableBody";
import ButtonIconFav from "components/buttons/ButtonIconFav";

const TableCSS = styled.table`
  background-color: ${({ theme }) => (theme === "light" ? "white" : "#282936")};
  color: ${({ theme }) => (theme === "light" ? "black" : "#fff")};
  box-shadow: rgb(88 102 126 / 8%) 0px 4px 24px,
    rgb(88 102 126 / 12%) 0px 1px 2px;
  border-radius: 10px;
  max-width: 100%;
  padding: 40px 20px;
  margin-bottom: 30px;
`;

function formatNum(value) {
  let num = Number(value);
  return num.toFixed(2);
}

function addSymbolPrice(value) {
  return `$${value}`;
}

function addComma(value) {
  const val = Number(value);
  return val.toLocaleString();
}

function addSymbolandComma(value) {
  const val = Number(value);
  const num = val.toLocaleString();
  const symbolPrice = `$${num}`;
  return symbolPrice;
}

export const columnValues = {
  fav: "fav",
  cmcRank: "cmc_rank",
  name: "name",
  symbol: "symbol",
  price: "last_price",
  percent24: "percent_change_24h",
  percent7d: "percent_change_7d",
  marketCap: "market_cap",
  volume24h: "volume_24h",
  circulatingSupply: "circulating_supply",
  currency: "currency",
  country: "country"
};

export const columnTitles = {
  [columnValues.fav]: "",
  [columnValues.cmcRank]: "#",
  [columnValues.name]: "Name",
  [columnValues.symbol]: "Symbol",
  [columnValues.price]: "Price",
  [columnValues.percent24]: "24h %",
  [columnValues.percent7d]: "7d %",
  [columnValues.marketCap]: "Market Cap",
  [columnValues.volume24h]: "Volume(24h)",
  [columnValues.circulatingSupply]: "Circulating Supply",
  [columnValues.currency]: "Currency",
  [columnValues.country]: "Country"
};

export const columns = [
  {
    title: columnTitles[columnValues.fav],
    value: columnValues.fav,
    style: { width: 100 },
    render: (ticker) => {
      return <ButtonIconFav ticker={ticker} />;
    }
  },
  {
    title: columnTitles[columnValues.cmcRank],
    value: columnValues.cmcRank,
    style: { width: 100 },
    renderPopoverHeader: () => <div>Ranking by cryptocurrency</div>
  },
  {
    title: columnTitles[columnValues.name],
    value: columnValues.name,
    sort: true
  },
  {
    title: columnTitles[columnValues.symbol],
    value: columnValues.symbol,
    sort: true
  },
  {
    title: columnTitles[columnValues.price],
    value: columnValues.price,
    render: (item) => {
      return addSymbolPrice(item.last_price);
    },
    sort: true
  },
  {
    title: columnTitles[columnValues.percent24],
    value: columnValues.percent24,
    style: { color: "#0bbf89", width: 100 },
    render: (item) => {
      return formatNum(item.percent_change_24h);
    },
    sort: true
  },
  {
    title: columnTitles[columnValues.percent7d],
    value: columnValues.percent7d,
    style: { color: "#0bbf89", width: 100 },
    render: (item) => {
      return formatNum(item.percent_change_7d);
    }
  },
  {
    title: columnTitles[columnValues.marketCap],
    value: columnValues.marketCap,
    render: (item) => {
      return addSymbolandComma(item.market_cap);
    },
    sort: true
  },
  {
    title: columnTitles[columnValues.volume24h],
    value: columnValues.volume24h,
    render: (item) => {
      return addSymbolandComma(item.market_cap);
    },
    sort: true
  },
  {
    title: columnTitles[columnValues.circulatingSupply],
    value: columnValues.circulatingSupply,
    render: (item) => {
      return addComma(item.circulating_supply);
    },
    sort: true
  },
  {
    title: columnTitles[columnValues.currency],
    value: columnValues.currency,
    sort: true
  },
  {
    title: columnTitles[columnValues.country],
    value: columnValues.country,
    sort: true
  }
];

const TableStock = ({
  columns,
  theme,
  alerts,
  tickers,
  onSort,
  sortBy,
  sortByAsc,
  onItemHover,
  sort
}) => {
  return (
    <div
      className={css`
        width: 100%;
        overflow-x: scroll;
      `}
    >
      <TableCSS theme={theme}>
        <TableHeader
          columns={columns}
          onSort={onSort}
          sortByAsc={sortByAsc}
          sortBy={sortBy}
          sort={sort}
        />
        <TableBody
          theme={theme}
          alerts={alerts}
          columns={columns}
          datasource={tickers}
          onItemHover={onItemHover}
        />
      </TableCSS>
    </div>
  );
};

export default TableStock;

import { css } from "@emotion/css";

import TableStock, { columns } from "components/table/TableStock";
import { useStockContext } from "context/StockContext";
import { useThemeContext } from "context/ThemeContext";

function Watchlist() {
  const { theme } = useThemeContext();
  const { favoriteTickers } = useStockContext();

  return (
    <div
      className={css`
        height: 100vh;
      `}
    >
      <TableStock tickers={favoriteTickers} columns={columns} theme={theme} />
    </div>
  );
}

export default Watchlist;

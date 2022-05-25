import { useEffect, useState } from "react";

import { getTickers } from "service";

export function useTickers() {
  const [tickers, setTickers] = useState([]);

  useEffect(() => {
    async function fetchTickers() {
      try {
        const tickers = await getTickers();
        setTickers(tickers);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTickers();
  }, []);
  return tickers;
}

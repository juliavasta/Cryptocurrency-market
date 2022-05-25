import {
  useCallback,
  useMemo,
  useState,
  useContext,
  createContext
} from "react";
import { getItem, storeItem } from "utils/localStorage";

const StockContext = createContext({});

const storedKey = "favoriteTickers";
const storedFavoriteTickers = getItem(storedKey) || [];

function StockContextProvider({ children }) {
  const [favoriteTickers, setFavoriteTickers] = useState(storedFavoriteTickers);

  const handleAddFavoriteTickers = useCallback(
    (ticker) => {
      const all = [...favoriteTickers, ticker];
      setFavoriteTickers(all);
      storeItem(storedKey, all);
    },

    [favoriteTickers]
  );

  const handleRemoveFavoriteTickers = useCallback(
    (ticker) => {
      const filteredList = favoriteTickers.filter(
        (item) => item.symbol !== ticker.symbol
      );
      setFavoriteTickers(filteredList);
      storeItem(storedKey, filteredList);
    },
    [favoriteTickers]
  );

  const value = useMemo(() => {
    return {
      favoriteTickers,
      add: handleAddFavoriteTickers,
      remove: handleRemoveFavoriteTickers
    };
  }, [favoriteTickers, handleAddFavoriteTickers, handleRemoveFavoriteTickers]);

  return (
    <StockContext.Provider value={value}>{children}</StockContext.Provider>
  );
}

function useStockContext() {
  const context = useContext(StockContext);
  if (!context) {
    console.log("error");
    throw new Error("useStockContext must be wrapped in StockContextProvider");
  }
  return context;
}

export { StockContextProvider, useStockContext };

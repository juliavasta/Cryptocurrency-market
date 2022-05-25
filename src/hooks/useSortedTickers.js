import { useState } from "react";

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

const useSortedTickers = (tickers) => {
  const [sortBy, setSortBy] = useState("cmc_rank");
  const [sortByAsc, setSortByAsc] = useState(true);

  const value = {
    tickers: getSortedProducts(tickers, sortBy, sortByAsc),
    sortBy,
    onSortBy: setSortBy,
    sortByAsc,
    onSortByAsc: setSortByAsc
  };

  return value;
};

export default useSortedTickers;

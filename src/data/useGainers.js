import { useEffect, useState } from "react";

import { getGainers } from "service";

export function useGainers() {
  const [gainers, setGainers] = useState([]);

  useEffect(() => {
    async function fetchGainers() {
      try {
        const gainers = await getGainers();
        setGainers(gainers);
      } catch (error) {
        console.log(error);
      }
    }
    fetchGainers();
  }, []);
  return gainers;
}

import { useEffect, useState } from "react";

import { getTrendings } from "service";

export function useTrendings() {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    async function fetchTrendings() {
      try {
        const trendings = await getTrendings();
        setTrendings(trendings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrendings();
  }, []);
  return trendings;
}

import { useEffect, useState } from "react";

import { getRecents } from "service";

export function useRecents() {
  const [recents, setRecents] = useState([]);

  useEffect(() => {
    async function fetchRecents() {
      try {
        const recents = await getRecents();
        setRecents(recents);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRecents();
  }, []);
  return recents;
}

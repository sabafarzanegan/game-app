import { useEffect, useState } from "react";
import clientaxios from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}
interface fetchGameresponse {
  count: number;
  results: Game[];
}
function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    clientaxios
      .get<fetchGameresponse>("/games")
      .then((res) => {
        setGames(res.data.results), setLoading(false);
      })
      .catch((err) => setError(err.message));
  }, []);
  return { games, error, loading };
}

export default useGames;

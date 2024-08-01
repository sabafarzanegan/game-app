import useGames from "../hooks/useGames";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import CardGame from "./CardGame";

interface Game {
  id: number;
  name: string;
}
interface fetchGameresponse {
  count: number;
  results: Game[];
}

function GameGrid() {
  const { games, loading, error } = useGames();
  return (
    <>
      <div>Game Grid</div>
      {loading && <Spinner color="red.500" size="xl" />}
      {error && <h1>{error}</h1>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} padding={10}>
        {games.map((game) => (
          <CardGame key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;

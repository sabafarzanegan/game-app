import { Card, CardBody, CardHeader, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
interface props {
  game: Game;
}

function CardGame({ game }: props) {
  return (
    <Card borderRadius={10} overflow="hidden" shadow="md">
      <Image boxSize="450px" objectFit="cover" src={game.background_image} />
      <CardBody>
        <Heading fontSize="lg">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default CardGame;

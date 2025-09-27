import { Game } from '@/Hooks/useGames';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import React from 'react'

interface props
{
    game: Game;
}
const GameCard = ({game}:props) => {
  return (
    <Card.Root width="320px">
        <Image src={game.background_image} />
        <Card.Body gap={2}>
            <Heading font="2xl">{game.name}</Heading>
        </Card.Body>
    </Card.Root>
)
}

export default GameCard
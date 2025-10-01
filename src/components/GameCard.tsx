import { Game } from '@/Hooks/useGames';
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import { HStack } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';
interface props
{
    game: Game;
}
const GameCard = ({game}:props) => {
  return (
    <Card.Root width="320px" borderRadius={10} overflow={'hidden'}>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <Card.Body gap={2}>
            <Heading font="2xl">{game.name}</Heading>
            <HStack justifyContent={"space-between"}>
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconList>
            <CriticScore score={game.metacritic}></CriticScore>
            </HStack>
        </Card.Body>
    </Card.Root>
)
}

export default GameCard
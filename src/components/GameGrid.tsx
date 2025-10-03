import React, { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "@/Hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "@/Hooks/useGenres";
interface Props{
  selectedGenre : Genre | null;
  selectedPlatform : Platform | null;
}
const GameGrid = ({selectedGenre , selectedPlatform} : Props) => {
  const { data, error, loading } = useGames(selectedGenre , selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <Text>{error}</Text>}
      <Flex wrap="wrap" gap={4} justifyContent="center">
        {loading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </Flex>
    </>
  );
};

export default GameGrid;

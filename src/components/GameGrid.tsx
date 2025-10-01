import React, { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "@/Hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error,loading } = useGames();
  const skeletons = [1,2,3,4,5,6,7,8];
  return (
    <>
      {error && <Text>{error}</Text>}
      <Flex wrap="wrap" gap={4} justifyContent="center">
        {loading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </Flex>
    </>
  );
};

export default GameGrid;

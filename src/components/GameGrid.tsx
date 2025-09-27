import React, { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "@/Hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <Flex wrap="wrap" gap={4} justifyContent="center">
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </Flex>
    </>
  );
};

export default GameGrid;

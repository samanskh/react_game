import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./Hooks/useGenres";

function App() {
  const [selectedGenres , setSelectedGenres] = useState<Genre | null>(null);
  return (
    <Grid templateAreas={{
      base : `"nav" "main"`, //single column two rows
      lg : `"nav nav" "aside main"` //large devices : two columns two rows
    }}
    templateColumns={{
      base: '1fr',
      lg : '220px 1fr' 
    }} >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
        <GridItem area="aside" display={{ base: "none", lg: "block" }} paddingX={5}>
          <GenreList selectedGenre={selectedGenres} onSelectedGenre={(genre) => setSelectedGenres(genre)}></GenreList>
        </GridItem>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenres}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;

import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {

  return (
    <Grid templateAreas={{
      base : `"nav" "main"`, //single column two rows
      lg : `"nav nav" "aside main"` //large devices : two columns two rows
    }} >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
        <GridItem area="aside" display={{ base: "none", lg: "block" }}>
          <GenreList></GenreList>
        </GridItem>
      <GridItem area="main">
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;

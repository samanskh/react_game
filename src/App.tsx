import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {

  return (
    <Grid templateAreas={{
      base : `"nav" "main"`, //single column two rows
      lg : `"nav nav" "aside main"` //large devices : two columns two rows
    }} >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
        <GridItem area="aside" bg="gold" display={{ base: "none", lg: "block" }}>
          Aside
        </GridItem>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;

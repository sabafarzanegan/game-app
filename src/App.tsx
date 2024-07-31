import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header main"`,
        lg: `"header header"  " asid main"`,
      }}>
      <GridItem area={"header"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem bg="pink.300" area={"asid"}>
          asid
        </GridItem>
      </Show>

      <GridItem bg="green.300" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;

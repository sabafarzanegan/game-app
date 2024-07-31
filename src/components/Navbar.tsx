import { HStack, Text } from "@chakra-ui/react";
import { SiRockstargames } from "react-icons/si";
import SwitchColor from "./SwitchColor";
function Navbar() {
  return (
    <HStack p={2} spacing={2}>
      <Text fontSize="2xl">
        <SiRockstargames />
      </Text>
      <Text as="em" fontSize="xl">
        Game Center
      </Text>
      <SwitchColor />
    </HStack>
  );
}

export default Navbar;

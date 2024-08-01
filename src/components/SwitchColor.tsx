import { useColorMode, Switch } from "@chakra-ui/react";

function SwitchColor() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Switch
      colorScheme="teal"
      size="md"
      isChecked={colorMode === "dark"}
      onChange={toggleColorMode}
    />
  );
}

export default SwitchColor;

import { useColorMode, Switch } from "@chakra-ui/react";

function SwitchColor() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Switch
      colorScheme="teal"
      size="sm"
      isChecked={colorMode === "dark"}
      onChange={toggleColorMode}
    />
  );
}

export default SwitchColor;

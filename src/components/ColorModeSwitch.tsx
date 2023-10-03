import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <div>
      <HStack>
        <Switch
          colorScheme="green"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
        {colorMode === "dark" ? <BsFillMoonFill /> : <BsSun />}
      </HStack>
    </div>
  );
};

export default ColorModeSwitch;

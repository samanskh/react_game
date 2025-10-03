import { Platform } from "@/Hooks/useGames";
import usePlatforms from "@/Hooks/usePlatforms";
import { Menu, Button, ButtonGroup, HStack, Text } from "@chakra-ui/react";
import { button } from "framer-motion/client";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
interface Props{
    onSelectPlatform : (platform:Platform) => void;
    selectedPlatform : Platform | null;
}
const PlatformSelector = ({onSelectPlatform , selectedPlatform} : Props) => {
    const {data , error} = usePlatforms();
    if(error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button margin={5} variant="outline">
            <HStack spaceX={2} >
            <Text>{selectedPlatform ? selectedPlatform.name : "Platform"}</Text>
            <BsChevronDown/>
            </HStack>
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
        {data.map(platform => <Menu.Item onClick={() => onSelectPlatform(platform)} key={platform.id} value={platform.name}>{platform.name}</Menu.Item>)}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlatformSelector;

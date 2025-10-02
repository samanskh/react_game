import useGenres from "@/Hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import { li } from "framer-motion/client";
import React from "react";

const GenreList = () => {
  const { data, error, loading } = useGenres();
  if(error) return null;
  if (loading) return <Spinner></Spinner>
  return (
    <List.Root listStyleType={"none"}>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image boxSize={"32px"} borderRadius={8} src={getCroppedImageUrl(genre.image_background)}></Image>
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;

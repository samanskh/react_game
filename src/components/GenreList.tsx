import useGenres, { Genre } from "@/Hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { li } from "framer-motion/client";
import React from "react";

interface Props{
  onSelectedGenre : (genre: Genre) => void;
  selectedGenre : Genre | null;
}
const GenreList = ({onSelectedGenre , selectedGenre}: Props) => {
  const { data, error, loading } = useGenres();
  if (error) return null;
  if (loading) return <Spinner></Spinner>;
  return (
    <List.Root listStyleType={"none"}>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              fontSize={"lg"}
              variant={"plain"}
              padding={0}
              _hover={{ color: "gray.400" }}
              onClick={() => onSelectedGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;

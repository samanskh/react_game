import React from "react";
import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let Color = score > 75 ? "green" : score > 50 ? "yellow" : "red";

  return (
    <Badge
      colorPalette={Color}
      fontSize="14px"
      px={2}
      py={1}
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;

import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelTypeProps {
  icon: string;
  text: string;
}

export default function TravelType({ icon, text }: TravelTypeProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex direction={["row", "column"]} align="center" justify="center">
      {isMobile ? (
        <Image
          src={`/icons/${icon}.svg`}
          w="120px"
          h="120px"
          mb="6"
          alt={text}
        />
      ) : (
        <Text color="yellow.400" fontSize="4xl" mr="2">
          •
        </Text>
      )}
    </Flex>
  );
}

"use client";

import {
  chakra,
  Container,
  Stack,
  Text,
  Box,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

import { DottedBox } from "./DottedBox";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState<string>("");
  const router = useRouter();

  const onClick = useCallback(() => {
    setIsLoading(true);
    router.push(`/vin/${value?.trim()}`);
  }, [value]);

  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={{ base: 12, lg: 24 }}>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        position="relative"
      >
        <Box
          width="100%"
          height="100%"
          position="absolute"
          zIndex={-1}
          top="-30px"
        >
          <DottedBox />
        </Box>

        <Stack
          direction="column"
          justifyContent="center"
          maxW="800px"
          spacing={6}
        >
          <chakra.h1
            fontSize="5xl"
            lineHeight={1}
            fontWeight="bold"
            textAlign="left"
          >
            <Text
              as="span"
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "green.400",
                zIndex: -1,
              }}
            >
              Купили авто из США,
            </Text>
            <br />
            <chakra.span color="green.400">
              хотите узнать
              <br />
              историю авто?
            </chakra.span>
          </chakra.h1>
          <Text
            fontSize="1.2rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            color="gray.500"
          >
            Покупали авто на аукционах Copart и IAAI? Хотите узнать историю,
            пробег и в каком состоянии он был продан на аукционе. Мы поможем
            найти все технические подробности проданных авто.
          </Text>

          <>
            <Stack flexWrap="wrap">
              <Stack direction={{ base: "column", md: "row" }}>
                <InputGroup
                  borderRadius="md"
                  size="lg"
                  variant="filled"
                  boxShadow="md"
                  w={{ base: "auto", md: "300px" }}
                >
                  <InputLeftElement
                    pointerEvents="none"
                    children={<Search2Icon color="gray.600" />}
                  />

                  <Input
                    disabled={isLoading}
                    type="text"
                    placeholder="WBXHU7C59K5L12107"
                    borderRadius="md"
                    bgColor="white"
                    _focus={{
                      bg: "#FFF",
                      borderColor: "gray.200",
                    }}
                    _hover={{
                      bg: "#FFF",
                    }}
                    _disabled={{
                      opacity: 1,
                    }}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </InputGroup>

                <Button
                  size="lg"
                  borderRadius="lg"
                  colorScheme={"green"}
                  boxShadow="md"
                  onClick={onClick}
                  isLoading={isLoading}
                >
                  Поиск
                </Button>
              </Stack>
            </Stack>
          </>
        </Stack>
      </Stack>
    </Container>
  );
};

export default HeroSection;

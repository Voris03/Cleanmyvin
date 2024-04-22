import Image from "next/image";
import React, { useCallback, useState } from "react";
import {
  Box,
  Heading,
  Link,
  Text,
  HStack,
  Tag,
  Button,
  useColorModeValue,
  Container,
  Stack,
  InputGroup,
  Input,
} from "@chakra-ui/react";

import SvgCar from "public/images/car.svg";
import { useRouter } from "next/navigation";

function ImageContainer({ src }: { src: any }) {
  return (
    <Image
      src={src}
      alt=""
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{ objectFit: "contain" }}
    />
  );
}

const BlogTags = (props: any) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag: any) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="green" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const Feature = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState<string>("");
  const router = useRouter();

  const onClick = useCallback(() => {
    setIsLoading(true);
    router.push(`/vin/${value?.trim()}`);
  }, [value]);

  return (
    <Container maxW={"7xl"}>
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        gap={{ base: 12, xl: 24 }}
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
          >
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <ImageContainer src={SvgCar} />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(blue.600 1px, transparent 1px)",
                "radial(blue.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>

        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
          gap={4}
        >
          <Box>
            <BlogTags tags={["ЭФФЕКТИВНО", "ПРОСТО", "БЫСТРО"]} />
            <Heading mt={2}>
              <Text>
                Как удалить историю автомобиля купленного на аукционе?
              </Text>
            </Heading>
          </Box>
          <Text
            as="p"
            marginTop={{ base: "4", md: "8" }}
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            У вас есть задача продать свой автомобиль или не хотите чтобы
            информация о вашем авто была доступна публично?
            <br />
            Услуга по очистке истории авто поможет сохранить стоимость
            автомобиля или удалить доступную в интернете информацию о вашем
            транспортном средстве. Всего за{" "}
            <Text
              as="span"
              color={"green.500"}
              display={"inline-block"}
              fontWeight="600"
            >
              30$
            </Text>{" "}
            мы поможем решить Вашу задачу.
          </Text>

          <Stack
            direction={{ base: "column", md: "row" }}
            mt={{ base: 4, md: 8 }}
          >
            <InputGroup
              borderRadius="md"
              size="lg"
              variant="filled"
              boxShadow="md"
              w={{ base: "auto", md: "100%" }}
            >
              <Input
                disabled={isLoading}
                type="text"
                placeholder="WBXHU7C59K5L12107"
                borderRadius="md"
                bgColor="white"
                value={value}
                onChange={(e) => setValue(e.target.value)}
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
        </Box>
      </Box>
    </Container>
  );
};

export default Feature;

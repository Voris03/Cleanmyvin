import Image from "next/image";
import {
  Box,
  Heading,
  Link,
  Text,
  Divider,
  HStack,
  Tag,
  Stack,
  Flex,
  Container,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

import SvgCard from "public/images/card.svg";

function ImageContainer({ src }: { src: any }) {
  return (
    <Box
      h="100%"
      w="400px"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
}

const Feature = ({ text, icon, iconBg }: any) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={6}
        h={6}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={400} color="gray.500">
        {text}
      </Text>
    </Stack>
  );
};

const BlogTags = (props: any) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag: any) => {
        return (
          <Tag
            size={"md"}
            fontWeight="600"
            variant="outline"
            colorScheme="blue"
            key={tag}
            color={"blue.500"}
          >
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export default function CTA() {
  return (
    <Container maxW={"7xl"} px={0}>
      <Box bg="gray.100" borderRadius="xl" backdropBlur="sm">
        <Stack direction="row" p={8} gap={12}>
          <Stack>
            <BlogTags tags={["КАЧЕСТВЕННО", "НАДЕЖНО"]} />
            <Stack gap={6}>
              <Heading color={"gray.800"}>Ваше Авто, Наша Забота</Heading>
              <Text
                as="p"
                marginTop={{ base: "2" }}
                color={"gray.700"}
                fontSize="lg"
              >
                Доверьте свое авто в надежные руки профессионалов! Мы предлагаем
                безупречную очистку вашего автомобиля из базы, гарантируя
                идеальный результат без лишних хлопот.{" "}
              </Text>

              <Stack spacing={2} marginTop={{ base: "2" }}>
                <Feature
                  icon={<Icon as={CheckIcon} color={"white"} w={3} h={3} />}
                  iconBg={"blue.500"}
                  text={"Профессиональное качество"}
                />
                <Feature
                  icon={<Icon as={CheckIcon} color={"white"} w={3} h={3} />}
                  iconBg={"blue.500"}
                  text={"Удобство и комфорт"}
                />
                <Feature
                  icon={<Icon as={CheckIcon} color={"white"} w={3} h={3} />}
                  iconBg={"blue.500"}
                  text={"Гарантия и надежность"}
                />
              </Stack>
            </Stack>
          </Stack>

          <Box display={{ base: "none", lg: "flex" }}>
            <ImageContainer src={SvgCard} />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2" size="xl">
        Страница не найдена
      </Heading>

      <Box display="inline-block">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Image src="/not-found.svg" alt="" width={500} height={500} />
        </Flex>
      </Box>

      <Box>
        <Link href="/" fontSize="2xl" color="gray.500">
          Вернуться на главную
        </Link>
      </Box>
    </Box>
  );
}

"use client";

import { Box, Heading, Link } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function Page() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <CloseIcon boxSize={"100px"} color={"red.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Что-то пошло не так,
        <br />
        Попробуйте еще раз.
      </Heading>
      <Box mt={8}>
        <Link href="/" fontSize="2xl" color="gray.500">
          Вернуться на главную
        </Link>
      </Box>
    </Box>
  );
}

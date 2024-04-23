"use client";
import Image from "next/image";

import { Box, Flex, Text, Button, useBreakpointValue } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box>
      <Flex
        bg={"white"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4, md: 20, lg: 32 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"gray.200"}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "left" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            alignItems="center"
            textDecoration={"none"}
          >
            <Button
              as="a"
              href="/"
              variant={"link"}
              gap={3}
              _hover={{ textDecoration: "none" }}
            >
              <Image src="/logo.png" alt="logo" width={40} height={40} />
              <Text as="span" color={"#000"} fontSize={"2xl"}>
                Checkusavin.com
              </Text>
            </Button>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

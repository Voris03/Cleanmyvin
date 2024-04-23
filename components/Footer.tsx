"use client";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaTelegram, FaTiktok } from "react-icons/fa";
import { ReactNode } from "react";

const currentYear = new Date().getFullYear();

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      target="_blank"
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>
          © {currentYear}, <a href="/">Checkusavin.com</a>
        </Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"Twitter"}
            href={"https://twitter.com/cleanmyvicom"}
          >
            <FaTwitter />
          </SocialButton>
          <SocialButton
            label={"Telegram"}
            href={"https://telegram.im/@cleanmyvin"}
          >
            <FaTelegram />
          </SocialButton>
          <SocialButton
            label={"Instagram"}
            href={"https://www.instagram.com/cleanvinmycom"}
          >
            <FaInstagram />
          </SocialButton>
          <SocialButton
            label={"Tiktok"}
            href={"https://tiktok.com/@cleanmyvincom"}
          >
            <FaTiktok />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}

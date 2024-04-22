"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider
      theme={theme}
      toastOptions={{ defaultOptions: { position: "bottom" } }}
    >
      {children}
    </ChakraProvider>
  );
}

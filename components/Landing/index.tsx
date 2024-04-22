"use client";

import CTA from "./CTA";
import Feature from "./Feature";
import Stats from "./Stats";
import FAQ from "./FAQ";
import { Box } from "@chakra-ui/react";

export default function SplitWithImage() {
  return (
    <>
      <Box mt={{ base: 6, lg: 12 }}>
        <CTA />
      </Box>
      <Box mt={{ base: 6, lg: 12 }}>
        <Stats />
      </Box>
      <Box mt={{ base: 12, lg: 24 }}>
        <Feature />
      </Box>
      <Box py={{ base: 12, lg: 24 }}>
        <FAQ />
      </Box>
    </>
  );
}

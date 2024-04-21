"use client";

import { useState, useEffect } from "react";
import { Box, Flex, Skeleton } from "@chakra-ui/react";

import { fetchLotFiles } from "@/lib/server";
import SwiperComponent from "components/Swiper";

const fetchImages = (vin: string) =>
  fetchLotFiles({ vin }).then((images) => images.map((image) => image.origin));

export function Swiper({ vin }: { vin: string }) {
  const [images, setImages] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    fetchImages(vin)
      .then(setImages)
      .then(() => setIsLoaded(true));
  }, [vin]);

  return (
    <Box
      mt={{ base: "12px", xl: 0 }}
      maxW="600px"
      boxShadow="md"
      borderWidth="1px"
      borderRadius="lg"
      p={4}
    >
      {isLoaded ? (
        <SwiperComponent images={images} />
      ) : (
        <Box>
          <Skeleton
            maxW="568px"
            h={{ base: "200px", sm: "450px" }}
            borderRadius="md"
          />
          <Flex gap="12px" mt="12px">
            <Skeleton
              h={{ base: "45px", sm: "100px" }}
              w="132px"
              borderRadius="md"
            />
            <Skeleton
              h={{ base: "45px", sm: "100px" }}
              w="132px"
              borderRadius="md"
            />
            <Skeleton
              h={{ base: "45px", sm: "100px" }}
              w="132px"
              borderRadius="md"
            />
            <Skeleton
              h={{ base: "45px", sm: "100px" }}
              w="132px"
              borderRadius="md"
            />
          </Flex>
        </Box>
      )}
    </Box>
  );
}

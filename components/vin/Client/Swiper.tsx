"use client";

import { useState, useEffect } from "react";
import { Box, Flex, Skeleton } from "@chakra-ui/react";

import { fetchLotFiles, parseImageUrl } from "@/lib/server";
import SwiperComponent from "components/Swiper";

const fetchImages = (vin: string) =>
  fetchLotFiles({ vin }).then((images) =>
    images.map((image) => parseImageUrl(image.origin, image.path))
  );

export function Swiper({ vin }: { vin: string }) {
  const [images, setImages] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    fetchImages(vin)
      .then(setImages)
      .then(() => setIsLoaded(true));
  }, [vin]);

  return (
    <>
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
    </>
  );
}

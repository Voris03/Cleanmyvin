import Image from "next/image";
import { SimpleGrid, Box } from "@chakra-ui/react";

export default function Carousel({ images }: { images: string[] }) {
  return (
    <>
      <section style={{ display: "flex" }}>
        <SimpleGrid
          minChildWidth="150px"
          spacing="20px"
          maxW="7xl"
          alignItems="center"
          justifyContent="center"
        >
          {images.map((image, i) => (
            <Box
              key={i}
              borderRadius="xl"
              bgColor="gray.200"
              position="relative"
              overflow="hidden"
              h="150px"
              w="150px"
            >
              <Image
                src={image}
                alt="Dan Abramov"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </Box>
          ))}
        </SimpleGrid>
      </section>
    </>
  );
}

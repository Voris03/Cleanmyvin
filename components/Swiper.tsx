"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./swiper.css";

import { Box, Button, LinkBox, LinkOverlay } from "@chakra-ui/react";

function ImageContainer({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt=""
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{ objectFit: "cover" }}
    />
  );
}

export default function Page({ images }: { images: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Box>
      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        thumbs={{
          // @ts-ignore
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <LinkBox
              borderRadius="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative"
              overflow="hidden"
              h={{ base: "200px", sm: "450px" }}
            >
              <LinkOverlay href={image} isExternal>
                <ImageContainer src={image} />
              </LinkOverlay>
            </LinkBox>
          </SwiperSlide>
        ))}
      </Swiper>

      <Box mt="12px">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop
          spaceBetween={12}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} style={{ opacity: 0.65 }}>
              <Button
                borderRadius="md"
                display="flex"
                h={{ base: "45px", sm: "100px" }}
                w="100%"
                alignItems="center"
                justifyContent="center"
                position="relative"
                overflow="hidden"
              >
                <ImageContainer src={image} />
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import {
  Flex,
  Box,
  Text,
  Heading,
  HStack,
  Stack,
  Divider,
  Center,
  List,
  ListItem,
  Tag,
  Table,
  TableContainer,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Link,
  Container,
  Tooltip,
} from "@chakra-ui/react";

import { fetchLot, fetchLots } from "lib/server";
import {
  buildAuctionHref,
  translateLoss,
  translateOdobrand,
  translateStatus,
} from "lib/utils";

import ImageTire from "public/icons/interface/tire.png";
import ImageMake from "public/icons/interface/make.png";
import ImageCalendar from "public/icons/interface/calendar.png";
import ImageFuel from "public/icons/interface/fuel.png";
import ImageCylinders from "public/icons/interface/cylinders.png";
import ImageGear from "public/icons/interface/gear.png";
import ImageEngine from "public/icons/interface/engine.png";
import ImageDrive from "public/icons/interface/drive.png";
import ImageKeys from "public/icons/interface/keys.png";
import ImageCloud from "public/icons/interface/cloud.png";
import ImageColor from "public/icons/interface/color.png";
import ImageDocument from "public/icons/interface/document.png";
import ImageCheck from "public/icons/interface/check.png";
import ImageMarker from "public/icons/interface/marker.png";
import ImageOdometer from "public/icons/interface/odometer.png";
import ImageStatus from "public/icons/interface/status.png";
import ImageWWW from "public/icons/interface/www.png";
import ImageWrench from "public/icons/interface/wrench.png";
import ImageWrenchSingle from "public/icons/interface/wrench-single.png";
import ImageHammer from "public/icons/interface/hammer.png";
import SvgQuestion from "public/images/question.svg";

import { Swiper, PaymentButton } from "components/vin/Client";

type Props = {
  params: { id: string };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const lot = await fetchLot({ vin: id });

  if (!lot) {
    return {
      title: `Lot Not Found | CleanMyVin`,
    };
  }

  return {
    title: `${lot.title} | CleanMyVin`,
  };
}

export async function generateStaticParams() {
  const lots = await fetchLots();

  console.log(lots.filter((lot) => !lot.vin));

  return lots.map((lot) => ({
    id: lot.vin,
  }));
}

function Item({
  image,
  title,
  value,
  postValue,
}: {
  image?: StaticImageData;
  title: string;
  value?: string | null;
  postValue?: string | null;
}) {
  return (
    <Flex>
      <Flex flexDirection={{ base: "column", lg: "row" }}>
        <HStack gap={3}>
          {image ? <Image src={image} alt="" width={18} height={18} /> : null}
          <Text>{title}:</Text>
        </HStack>

        <Box ml={{ base: 0, lg: 3 }}>
          {value ? (
            <Box
              display="flex"
              gap="3px"
              textTransform="uppercase"
              fontWeight={600}
            >
              <Text>{value}</Text>
              <Text>{postValue}</Text>
            </Box>
          ) : (
            <Text>-</Text>
          )}
        </Box>
      </Flex>
    </Flex>
  );
}

export default async function Page({ params: { id } }: Props) {
  const lot = await fetchLot({ vin: id });

  if (!lot) notFound();

  return (
    <>
      <Container maxW={"8xl"} py="24px">
        <Box gap="12px" display={{ base: "block", lg: "flex" }}>
          <Box
            flex="1"
            boxShadow="md"
            bg="white"
            borderWidth="1px"
            borderRadius="lg"
            p={8}
          >
            <Box>
              <Stack
                direction={{ base: "column", lg: "row" }}
                justifyContent={{ base: "left", lg: "space-between" }}
              >
                <Box>
                  <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: "2xl" }}
                  >
                    {lot.title}
                  </Heading>
                </Box>

                <Box>
                  <Tooltip label="VIN-код" hasArrow placement="bottom">
                    <Tag
                      fontWeight={500}
                      size="lg"
                      padding={2}
                      px={4}
                      color="blue.400"
                      bgColor="blue.50"
                    >
                      {lot?.vin}
                    </Tag>
                  </Tooltip>
                </Box>
              </Stack>

              <Stack mt="24px" gap="12px">
                <Item
                  image={ImageStatus}
                  title="Состояние"
                  value={translateStatus(lot.status)}
                />
                <Item
                  image={ImageOdometer}
                  title="Пробег"
                  value={lot.odometer}
                  postValue="mi"
                />
                <Item
                  image={ImageCheck}
                  title="Актуальность пробег"
                  value={translateOdobrand(lot.odobrand)}
                />

                <Divider />

                <Item
                  image={ImageEngine}
                  title="Тип повреждения"
                  value={translateLoss(lot.loss)}
                />

                <Item
                  image={ImageWrench}
                  title="Основное повреждение"
                  value={lot.damagePr}
                />

                <Item
                  image={ImageWrenchSingle}
                  title="Второстепенное повреждение"
                  value={lot.damageSec}
                />

                <Divider />

                <Item
                  title="Рыночная стоимость"
                  value={lot.costPrice}
                  postValue="$"
                />

                <Item
                  title="Стоимость ремонта"
                  value={lot.costRepair}
                  postValue="$"
                />

                <Divider />

                <Item
                  image={ImageCalendar}
                  title="Дата аукциона"
                  value={
                    lot.auctionDate
                      ? new Date(lot.auctionDate).toLocaleDateString()
                      : undefined
                  }
                />

                <Item
                  image={ImageMarker}
                  title="Место проведения аукциона"
                  value={lot.location}
                />

                <Item
                  image={ImageHammer}
                  title="Номер лота"
                  value={lot.lotId}
                />

                <Flex>
                  <HStack gap={3}>
                    <Image src={ImageWWW} alt="" width={18} height={18} />
                    <Text>Аукцион:</Text>
                    <Box
                      display="flex"
                      gap="3px"
                      textTransform="uppercase"
                      fontWeight={600}
                    >
                      <Link
                        href={buildAuctionHref(lot.source, lot.lotId)}
                        isExternal
                        color="blue.400"
                        _hover={{
                          textDecoration: "none",
                          color: "blue.500",
                        }}
                      >
                        <Text textTransform="uppercase">{lot.source}</Text>
                      </Link>
                    </Box>
                  </HStack>
                </Flex>
              </Stack>
            </Box>
          </Box>

          <Box
            mt={{ base: "12px", lg: 0 }}
            maxW="600px"
            boxShadow="md"
            borderWidth="1px"
            borderRadius="lg"
            bg="white"
            p={4}
          >
            <Swiper vin={lot.vin} />
          </Box>
        </Box>

        <Box
          boxShadow="md"
          borderWidth="1px"
          borderRadius="lg"
          p={8}
          mt="12px"
          bg="white"
        >
          <TableContainer>
            <Table variant="simple">
              <TableCaption placement="bottom">История продаж</TableCaption>
              <Thead>
                <Tr>
                  <Th>Дата</Th>
                  <Th>Аукцион</Th>
                  <Th isNumeric>Стоимость</Th>
                  <Th>Статус</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td fontWeight={600}>
                    {lot?.auctionDate
                      ? new Date(lot.auctionDate).toLocaleDateString()
                      : "-"}
                  </Td>
                  <Td>
                    <Link
                      href={buildAuctionHref(lot?.source, lot?.lotId)}
                      isExternal
                      color="blue.400"
                      _hover={{
                        textDecoration: "none",
                        color: "blue.500",
                      }}
                      fontWeight={600}
                    >
                      <Text textTransform="uppercase">{lot?.source}</Text>
                    </Link>
                  </Td>
                  <Td isNumeric fontWeight={600}>
                    {lot?.bid} $
                  </Td>
                  <Td fontWeight={600}>{lot?.auctionStatus?.toString()}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        <Box gap={"12px"} display={{ base: "block", lg: "flex" }} mt="12px">
          <Box
            flex={"75%"}
            boxShadow="md"
            bg="white"
            borderWidth="1px"
            borderRadius="lg"
            p={8}
          >
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl" }}
            >
              Технические характеристики
            </Heading>

            <Flex direction={{ base: "column", lg: "row" }} mt="12px">
              <Box flex="50%">
                <Box mt="12px">
                  <Item
                    image={ImageGear}
                    title="Коробка передач"
                    value={lot?.transmission}
                  />
                </Box>
                <Box mt="12px">
                  <Item
                    image={ImageEngine}
                    title="Двигатель"
                    value={lot?.engine}
                  />
                </Box>
                <Box mt="12px">
                  <Item
                    image={ImageDrive}
                    title="Тип привода"
                    value={lot?.drive}
                  />
                </Box>
              </Box>

              <Box flex="50%">
                <Box mt="12px">
                  <Item
                    image={ImageCylinders}
                    title="Кол-во цилиндров"
                    value={lot?.cylinders}
                  />
                </Box>
                <Box mt="12px">
                  <Item image={ImageFuel} title="Топливо" value={lot?.fuel} />
                </Box>
                <Box mt="12px">
                  <Item
                    image={ImageCloud}
                    title="Подушки"
                    value={lot?.airbags}
                  />
                </Box>
              </Box>
            </Flex>

            <Divider mt="24px" />

            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl" }}
              mt="24px"
            >
              Дополнительная информация
            </Heading>

            <Flex direction={{ base: "column", lg: "row" }} mt="12px">
              <Box flex="50%">
                <Box mt="12px">
                  <Item image={ImageMake} title="Марка" value={lot?.make} />
                </Box>
                <Box mt="12px">
                  <Item image={ImageTire} title="Модель" value={lot?.model} />
                </Box>
                <Box mt="12px">
                  <Item image={ImageCalendar} title="Год" value={lot?.year} />
                </Box>
              </Box>

              <Box flex="50%">
                <Box mt="12px">
                  <Item image={ImageColor} title="Цвет" value={lot?.color} />
                </Box>
                <Box mt="12px">
                  <Item
                    image={ImageKeys}
                    title="Ключи"
                    value={
                      typeof lot?.keys === "boolean"
                        ? lot?.keys
                          ? "Присутствуют"
                          : "Отсутствуют"
                        : undefined
                    }
                  />
                </Box>
                <Box mt="12px">
                  <Item
                    image={ImageDocument}
                    title="Документы"
                    value={lot?.document}
                  />
                </Box>
              </Box>
            </Flex>
          </Box>

          <Box
            flex={"25%"}
            boxShadow="md"
            bg="white"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            mt={{ base: "12px", lg: 0 }}
          >
            <Box w={"full"} bg={"white"}>
              <Stack
                textAlign={"center"}
                p={8}
                pb={10}
                color={"gray.800"}
                align={"center"}
              >
                <Tag
                  size="lg"
                  fontSize={"sm"}
                  fontWeight={500}
                  p={2}
                  px={4}
                  color="red.400"
                  bgColor="red.50"
                >
                  {lot?.vin}
                </Tag>
                <Stack direction={"row"} align={"center"} justify={"center"}>
                  <Text fontSize={"3xl"}>$</Text>
                  <Text fontSize={"6xl"} fontWeight={800}>
                    29
                  </Text>
                  <Text color={"gray.500"} fontSize="2xl">
                    .99
                  </Text>
                </Stack>
              </Stack>

              <Box bg={"gray.50"} px={16} py={8}>
                <Center>
                  <List spacing={3}>
                    <ListItem>
                      <HStack>
                        <Image src={ImageCheck} alt="" width={15} height={15} />
                        <Text>Доступ в интернете</Text>
                      </HStack>
                    </ListItem>
                    <ListItem>
                      <HStack>
                        <Image src={ImageCheck} alt="" width={15} height={15} />
                        <Text>Актуальный пробег</Text>
                      </HStack>
                    </ListItem>
                    <ListItem>
                      <HStack>
                        <Image src={ImageCheck} alt="" width={15} height={15} />
                        <Text>Все изображения</Text>
                      </HStack>
                    </ListItem>
                  </List>
                </Center>

                <PaymentButton vin={lot.vin} />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          boxShadow="md"
          borderWidth="1px"
          borderRadius="lg"
          p={8}
          mt="12px"
          bg="white"
        >
          <Stack
            direction={{ base: "column", lg: "row" }}
            justifyContent="space-between"
            gap={{ base: "12px" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }} maxW="600px">
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "4xl", lg: "6xl" }}
              >
                <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: "30%",
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "red.400",
                    zIndex: -1,
                  }}
                >
                  Раз, два -
                </Text>
                <br />
                <Text as={"span"} color={"red.400"}>
                  и чисто!
                </Text>
              </Heading>

              <Text color={"gray.500"}>
                Наша компания - это не просто сервис, это гарантия безопасности
                и надежности. Мы используем передовые методы обработки данных,
                чтобы обеспечить полную конфиденциальность вашей информации.
                Наши специалисты внимательно следят за каждым этапом процесса,
                чтобы вы могли быть уверены в чистоте данных вашего автомобиля.
              </Text>
            </Stack>

            <Flex flex={1} justifyContent="center">
              <Image src={SvgQuestion} alt="" height={300} />
            </Flex>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

import {
  Box,
  Container,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function FAQ() {
  return (
    <Container maxW={"4xl"}>
      <Box>
        <Heading
          as="h2"
          textAlign={"center"}
          fontSize={{ base: "1.75rem", md: "2.25rem" }}
          fontWeight="500"
          lineHeight={"1.15"}
          mb="32px"
        >
          Остались вопросы?
        </Heading>
        <Accordion allowMultiple>
          <AccordionItem>
            <h3>
              <AccordionButton py={{ base: "12px", md: "24px" }}>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: "1.25rem", md: "1.375rem" }}
                  lineHeight={{ base: "1.2", md: "1.4" }}
                  fontWeight="500"
                >
                  Как быстро происходит удаление истории авто
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h3>
            <AccordionPanel py={6}>
              <Text>
                В стандартной ситуации удаление фото и истории авто с ресурсов
                моментально после оплаты. Однако данные в поисковых системах
                могут храниться в кэше до 1-2 недель.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h3>
              <AccordionButton py={{ base: "12px", md: "24px" }}>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: "1.25rem", md: "1.375rem" }}
                  lineHeight={{ base: "1.2", md: "1.4" }}
                  fontWeight="500"
                >
                  Удалятся ли данные моего автомобиля из поисковых систем?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h3>
            <AccordionPanel py={6}>
              Да, после удаления ссылки и фото с Указанных сайтов, наша компания
              отправить официальную заявку в Google и удалить все упоминания
              вашего VIN из Google. Процесс занимает от 1 ой до 2 недель
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h3>
              <AccordionButton py={{ base: "12px", md: "24px" }}>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: "1.25rem", md: "1.375rem" }}
                  lineHeight={{ base: "1.2", md: "1.4" }}
                  fontWeight="500"
                >
                  Какие методы оплаты?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h3>
            <AccordionPanel py={6}>
              Вы можете выбрать удобный для себя способ оплаты. Это может быть
              оплата платежной картой через платежные модули, криптовалюта.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h3>
              <AccordionButton py={{ base: "12px", md: "24px" }}>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: "1.25rem", md: "1.375rem" }}
                  lineHeight={{ base: "1.2", md: "1.4" }}
                  fontWeight="500"
                >
                  Какие гарантии?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h3>
            <AccordionPanel py={6}>
              Если оплаченный vin автомобиля не удаляется, то мы возвращаем
              деньги. Если информация которая была удалена каким-то образом
              появилась вновь (например неудачный backup или сбой) то мы
              повторно удаляем ее бесплатно.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Container>
  );
}

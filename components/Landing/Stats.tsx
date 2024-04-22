import * as React from "react";
import { Container, Text, SimpleGrid, Box } from "@chakra-ui/react";

interface StatData {
  id: number;
  label: string;
  score: string;
}

const statData: StatData[] = [
  {
    id: 1,
    label: "Собранно данных",
    score: "> 800,000",
  },
  {
    id: 2,
    label: "Клиентская удовлетворенность",
    score: "99 %",
  },
  {
    id: 3,
    label: "Оплачено услуг",
    score: "> 1000",
  },
];

const Stats = () => {
  return (
    <Container maxW="7xl">
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
        {statData.map((data) => (
          <Box
            key={data.id}
            p={5}
            boxShadow="md"
            rounded="lg"
            borderWidth={1}
            bg="white"
          >
            <Text fontWeight="extrabold" fontSize="2xl">
              {data.score}
            </Text>
            <Text color="gray.500">{data.label}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Stats;

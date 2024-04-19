import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react"
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from "react-icons/io5"
import { Section } from "@/app/layouts/Section"
import { ReactElement } from "react"

import featureImage from '../public/feature.svg';
interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function SplitWithImage() {
  return (
    <Section
      title = {
        <Text fontSize="3xl" fontWeight="bold" mb={4} style={{ width: '70%', margin: '0 auto' }}> О НАС</Text>
      } 
      description = {
        <Text style={{ width: '75%', margin: '0 auto', marginBottom: '50px' }}>Cleanmyvin.com специализируется на сборе информации об автомобилях с аукционов Copart и IAAI. Мы предоставляем подробную информацию обо всех автомобилях, представленных на аукционах.</Text>
      }
    >

      <Flex direction={{ base: 'column', md: 'row' }} alignItems="center" justifyContent="center" mb={4}>
        <Box flex="1" order={{ base: 1, md: -1 }} mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }} display="flex" justifyContent="center" alignItems="center">
          <Image src="/feature2.svg" alt="feature" width={450} height={450} />
        </Box>
        <Box flex="1" textAlign={{ base: 'center', md: 'center' }}>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            УСЛУГИ ПО УДАЛЕНИЮ ИСТОРИИ АВТОМОБИЛЯ
          </Text>
          <Text mb={4}>
            Если вы хотите удалить информацию о своем автомобиле, приобретенном на аукционе, мы можем вам помочь. Наша услуга по очистке истории автомобиля поможет сохранить его стоимость и обеспечить конфиденциальность.
          </Text>
        </Box>
      </Flex>


      <Flex direction={{ base: 'column', md: 'row' }} alignItems="center" mb={6}>
        <Box flex="1" textAlign={{ base: 'center', md: 'center' }} mb={{ base: 4, md: 0 }}>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            ПРОЦЕСС ЗАКАЗА УСЛУГИ
          </Text>
          <Text mb={6}>
            Чтобы воспользоваться нашим сервисом, оставьте заявку на бесплатную консультацию или воспользуйтесь формой поиска по VIN-номеру, чтобы заказать удаление информации о вашем автомобиле. Мы гарантируем оперативное удаление доступной информации и фотографий вашего транспортного средства из поисковых систем.
          </Text>
        </Box>
        <Box flex="1" textAlign="center" ml={{ base: 0, md: 4 }} display="flex" justifyContent="center" alignItems="center">
          <Image src="/feature.svg" alt="feature" width={450} height={450} />
        </Box>
      </Flex>


    </Section>
  )
}

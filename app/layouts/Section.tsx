import { Box, Text, Image, Flex } from '@chakra-ui/react';

interface SectionProps {
  title: React.ReactNode;
  description: React.ReactNode;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, description, children }) => (
  <Box margin="30px">
    <Box textAlign="center" mb="20px">
      {title}
      {description}
    </Box>
    {children}
  </Box>
);

export { Section };

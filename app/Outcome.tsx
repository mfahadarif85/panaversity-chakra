"use client";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

// Replace test data with your own
const features = [
  {
    id: 1,
    title: "Top 5 'Metaverse' jobs that will rule the future of tech industry",
  },
  {
    id: 2,
    title: "Blockchain Developer Salary - Jun 2022",
  },
  {
    id: 3,
    title: "Web3 Salaries Soar to $750,000 for Rank-and-File Devs",
  },
  {
    id: 4,
    title:
      "The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Waters",
  },
  {
    id: 5,
    title: "How To Become Metaverse Developer: Scope, Skills, and Salary",
  },
];

export default function Outcome() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>
          The Outcome for Participants of the Program
        </Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          The graduates of this program will own products (Full-Stack App
          Templates, AR and VR Experiences, and APIs) that are marketed globally
          by the Panaverse DAO and, if they like, will also be able to start off
          by offering services at a rate of $50 per hour ($96,000 per year).
          This would give Pakistani professionals and students a fantastic
          opportunity to better their financial situation while also giving the
          economy a much-needed boost by expanding software exports.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <Text>Industry News</Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

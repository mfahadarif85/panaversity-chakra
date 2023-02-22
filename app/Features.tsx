"use client";
import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";

interface FeatureProps {
  heading: string;
  text: string;
}

const Feature = ({ heading, text }: FeatureProps) => {
  return (
    <GridItem>
      <chakra.h3 fontSize='xl' fontWeight='600'>
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

export default function Features() {
  return (
    <Box as={Container} maxW='7xl' mt={14} p={4}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        <GridItem colSpan={1}>
          <VStack alignItems='flex-start' spacing='20px'>
            <chakra.h2 fontSize='3xl' fontWeight='700'>
              The Program in a Nutshell: Earn While You Learn
            </chakra.h2>
            <Button colorScheme='green' size='md'>
              Enroll Now
            </Button>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p>
              In this brand-new type of curriculum, students will learn how to
              make money and boost exports in the classroom and will begin doing
              so within six months of the program&apos;s beginning. It resembles
              a cross between a corporate venture and an educational project.
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      <Heading textAlign='center' mb='6'>
        Program of Studies
      </Heading>
      <Text>Core Courses</Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
      >
        <Feature
          heading={"Quarter I-Core"}
          text={"Object-Oriented Programming using TypeScript"}
        />
        <Feature
          heading={"Quarter II-Core"}
          text={
            "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
          }
        />
        <Feature
          heading={"Quarter III-Core"}
          text={
            "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development"
          }
        />
      </Grid>
      <Text>Specializations</Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
      >
        <Feature
          heading={"I.	Web 3.0 (Blockchain) and Metaverse Specialization"}
          text={
            "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences."
          }
        />
        <Feature
          heading={
            "II.	Artificial Intelligence (AI) and Deep Learning Specialization"
          }
          text={
            "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models."
          }
        />
        <Feature
          heading={"III.	Cloud-Native Computing Specialization"}
          text={
            "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes"
          }
        />
        <Feature
          heading={"IV.	Ambient Computing and IoT Specialization"}
          text={
            "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices"
          }
        />
        <Feature
          heading={"V.	Genomics and Bioinformatics Specialization"}
          text={
            "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications."
          }
        />
        <Feature
          heading={"VI.	Network Programmability and Automation Specialization"}
          text={
            "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git."
          }
        />
      </Grid>
    </Box>
  );
}

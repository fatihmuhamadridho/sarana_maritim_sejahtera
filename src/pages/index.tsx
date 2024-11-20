import { Hero, Layout } from "@/components";
import {
  BackgroundImage,
  Badge,
  Box,
  Button,
  Center,
  Flex,
  List,
  Stack,
  Text,
} from "@mantine/core";
import { IconHeartRateMonitor } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Center bg={"#1778ff"} h={288} w={"100%"} p={20}>
        <Flex direction={"column"} maw={1110} w={"100%"} gap={64}>
          <Flex>
            <Text>cs-jkt@legion-indo.com</Text>
            <Text>(021) 29456666</Text>
            <Flex direction={"column"} align={"center"}>
              <Text>Working Hours :</Text>
              <Text>Mon - Fri: 8.30AM to 5PM,</Text>
              <Text>Sat : 8.30AM to 1.30PM</Text>
            </Flex>
          </Flex>
          <Flex>
            <Box maw={730}>
              <Text>About Us</Text>
              <Text>
                At Legion Logistik Indonesia, we pride ourselves on our capacity
                to give benefit to our clients from our extensive experience and
                knowledge in creating logistics solutions to suits client needs.
                Utilizing our worldwide connections, we can streamline logistics
                barriers and building a strong supply chain.
              </Text>
            </Box>
            <Button>Read More</Button>
          </Flex>
        </Flex>
      </Center>
      <Center w={"100%"} mt={60}>
        <Flex maw={1110} direction={{ base: "column", sm: "row" }}>
          <Image
            src={"/images/world_map.webp"}
            alt="world_map"
            width={1110}
            height={314}
            style={{ width: "100%", height: "auto" }}
            priority
          />
          <Box>
            <Text>Global Partner</Text>
            <List className="!list-decimal">
              <List.Item>
                <Stack gap={0}>
                  <Text>SINGAPORE</Text>
                  {[1, 2, 3, 4].map((item: any) => (
                    <Text key={item}>
                      Legion Network Group Private Limited (HQ) :
                    </Text>
                  ))}
                </Stack>
              </List.Item>
              <List.Item>
                <Stack gap={0}>
                  <Text>MALAYSIA</Text>
                  <Text>Legion Network Group Private Limited (HQ) :</Text>
                </Stack>
              </List.Item>
            </List>
          </Box>
        </Flex>
      </Center>
      <Center mt={60} mb={30}>
        <Flex direction={"column"} align={"center"}>
          <Badge>SERVICES</Badge>
          <Text mt={24} fz={32}>
            What Can We Do For You ?
          </Text>
          <Flex mt={50} gap={30} wrap={"wrap"}>
            {[1, 2, 3].map((item) => (
              <Flex key={item} direction={"column"} maw={286}>
                <Flex>
                  <IconHeartRateMonitor size={50} />
                  <Text>Supply Chain Management</Text>
                </Flex>
                <Text>
                  We help our clients to create and manage high-performing
                  supply chains that drive sustained, profitable growth.
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Center>
      <BackgroundImage
        className="relative"
        src="/images/warehouse2.webp"
        h={423}
      >
        <Center className="bg-black/50 z-10" h={"100%"} c={"white"}>
          <Stack maw={1110} align="center">
            <Text ta={"center"}>PT. LEGION LOGISTIK INDONESIA</Text>
            <Text ta={"center"}>
              Within excess of our global network from 9400 partners in 195
              countries creates a competitive advantage for our transportation
              and logistics services, we are dependably at your administration.
              We will likely give you the best worldwide, yet neighbourhood
              benefit around. Get in touch with us today.
            </Text>
            <Button>Read More</Button>
          </Stack>
        </Center>
      </BackgroundImage>
      <Box py={60}></Box>
      <Center>
        <Flex maw={1110} direction={"column"} align={"center"}>
          <Text>Contact</Text>
          <Text>Get In Touch With Us</Text>
        </Flex>
      </Center>
    </Layout>
  );
};

export default HomePage;

import { Box, Center, Stack, Text } from "@mantine/core";
import React from "react";

const Footer = () => {
  return (
    <Stack bg={"#2e3339"} h={448} gap={0}>
      <Box bg={"#272c30"} mih={400}></Box>
      <Center h={"100%"}>
        <Text ta={"center"} c={"white"} fz={12}>
          2020 © Copyright PT. Legion Logistik Indonesia. All Rights Reserved
        </Text>
      </Center>
    </Stack>
  );
};

export default Footer;

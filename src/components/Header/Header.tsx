import { Box, Center, Flex, Text } from "@mantine/core";
import React from "react";
import { IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import { useWindowScroll } from "@mantine/hooks";

const Header = () => {
  const [scroll] = useWindowScroll();
  const bgColor = scroll.y > 100 ? "#FFFFFF" : "#FFFFFF99";

  return (
    <Center
      className="fixed top-0 w-full z-50"
      style={{ backgroundColor: bgColor }}
      px={16}
      mih={90}
    >
      <Flex justify={"space-between"} align={"center"} maw={1200} w={"100%"}>
        <Image
          className="py-1 pr-1 cursor-pointer"
          src={"/images/logo.webp"}
          alt="logo"
          width={140}
          height={60}
        />
        <Flex gap={12} visibleFrom="sm">
          {["HOME", "ABOUT US", "SERVICES", "NEWS", "CONTACT"].map((item) => (
            <Text key={item}>{item}</Text>
          ))}
        </Flex>
        <Box hiddenFrom="sm">
          <IconMenu2
            className="p-1 cursor-pointer"
            size={32 + 8}
            color="#1778ff"
          />
        </Box>
      </Flex>
    </Center>
  );
};

export default Header;

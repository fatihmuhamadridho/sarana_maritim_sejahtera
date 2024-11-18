import { Center, Flex } from "@mantine/core";
import React from "react";
import { IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";

const Header = () => {
  return (
    <Center className="fixed w-full z-10" bg={"#FFFFFF99"} px={16}>
      <Flex
        justify={"space-between"}
        align={"center"}
        maw={1200}
        h={90}
        w={"100%"}
      >
        <Image
          className="py-1 pr-1 cursor-pointer"
          src={"/images/logo.webp"}
          alt="logo"
          width={140}
          height={60}
        />
        <IconMenu2
          className="p-1 cursor-pointer"
          size={32 + 8}
          color="#1778ff"
        />
      </Flex>
    </Center>
  );
};

export default Header;

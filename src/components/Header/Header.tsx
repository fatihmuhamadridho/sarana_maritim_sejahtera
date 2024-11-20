import { Box, Center, Flex, UnstyledButton } from "@mantine/core";
import React from "react";
import { IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import { useWindowScroll } from "@mantine/hooks";
import Link from "next/link";
import { LIST_HEADER } from "@/constant";

const Header = () => {
  const [scroll] = useWindowScroll();
  const bgColor = scroll.y > 100 ? "#FFFFFF" : "#FFFFFF99";

  return (
    <Center
      className="fixed top-0 w-full transition-all duration-300 z-50"
      style={{ backgroundColor: bgColor }}
      px={16}
      mih={90}
    >
      <Flex justify={"space-between"} align={"center"} maw={1200} w={"100%"}>
        <Link href={"/"}>
          <Image
            className="py-1 pr-1 cursor-pointer"
            src={"/images/logo.webp"}
            alt="logo"
            width={140}
            height={60}
          />
        </Link>
        <Flex gap={24} visibleFrom="sm">
          {LIST_HEADER.map((item, index) => (
            <UnstyledButton component={Link} href={item.path} key={index}>
              {item.label}
            </UnstyledButton>
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

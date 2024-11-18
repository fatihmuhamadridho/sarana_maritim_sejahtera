import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import React from "react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Box, Button, Flex, Text } from "@mantine/core";
import Link from "next/link";

const Hero = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const handleStartAutoPlay = () => {
    autoplay.current.reset();
    autoplay.current.play();
  };

  return (
    <Carousel
      height={648}
      plugins={[autoplay.current]}
      onDragStart={() => autoplay.current.stop()}
      onMouseLeave={handleStartAutoPlay}
      loop={true}
      nextControlIcon={
        <IconChevronRight style={{ width: 36, height: 36 }} color="#ffffff80" />
      }
      previousControlIcon={
        <IconChevronLeft style={{ width: 36, height: 36 }} color="#ffffff80" />
      }
      styles={{
        control: {
          background: "#FFFFFF33",
          border: "none",
          width: 56,
          height: 56,
        },
      }}
      withIndicators={true}
    >
      <Carousel.Slide>
        <Box className="relative overflow-hidden" w={"100%"} h={648}>
          <Flex
            className="absolute bg-black/40 z-10"
            direction={"column"}
            align={"center"}
            justify={"center"}
            px={72}
            w={"100%"}
            h={"100%"}
            c={"white"}
          >
            <Text fz={56} fw={700} mb={20} ta={"center"}>
              Warehouse & Distribution
            </Text>
            <Text ta={"center"} maw={1110} px={15} mb={30}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quia?
            </Text>
            <Button
              component={Link}
              href={""}
              py={14}
              px={32}
              radius={20}
              h={42}
              w={151}
              fz={14}
              fw={700}
              bg={"#FFE500"}
              c={"#212121"}
            >
              Read More
            </Button>
          </Flex>
          <Image
            src={"/images/international_freight4.webp"}
            alt="hero-1"
            fill
            className="object-cover"
            priority
          />
        </Box>
      </Carousel.Slide>
      <Carousel.Slide>
        <Box className="relative overflow-hidden" w={"100%"} h={648}>
          <Flex
            className="absolute bg-black/40 z-10"
            direction={"column"}
            align={"center"}
            justify={"center"}
            px={72}
            w={"100%"}
            h={"100%"}
            c={"white"}
          >
            <Text fz={56} fw={700} mb={20} ta={"center"}>
              Warehouse & Distribution
            </Text>
            <Text ta={"center"} maw={1110} px={15} mb={30}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto quas error doloremque eligendi facilis provident modi?
              Nam fuga totam assumenda recusandae impedit perspiciatis quis
              architecto suscipit magni eius, eum voluptas vel quos cumque ipsam
              temporibus doloribus repudiandae. Tenetur iste animi doloremque
              aut sit placeat asperiores officiis nisi at. Nostrum aliquam quasi
              nobis unde quas id ex harum distinctio voluptate sapiente enim,
              tempore quidem adipisci, corporis impedit soluta quam nulla vel
              voluptatibus esse consequuntur? Ipsum, eum optio. Quos, veritatis,
              architecto numquam nam minus, laboriosam soluta provident tempora
              molestias culpa inventore non. Non, ab excepturi consequatur a
              delectus corrupti labore porro accusamus?
            </Text>
            <Button
              component={Link}
              href={""}
              py={14}
              px={32}
              radius={20}
              h={42}
              w={151}
              fz={14}
              fw={700}
              bg={"#FFE500"}
              c={"#212121"}
            >
              Read More
            </Button>
          </Flex>
          <Image
            src={"/images/warehouse5.webp"}
            alt="hero-2"
            fill
            className="absolute object-cover"
            priority
          />
        </Box>
      </Carousel.Slide>
    </Carousel>
  );
};

export default Hero;

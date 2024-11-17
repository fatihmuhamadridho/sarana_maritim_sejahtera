import React from "react";
import { Header } from "@components";
import { Box } from "@mantine/core";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
};

export default Layout;

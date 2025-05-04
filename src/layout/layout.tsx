import { Box } from "@mui/material";
import { ReactNode } from "react";
import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box className="!w-screen !fixed !inset-0 flex flex-col lg:flex-row text-balck h-screen ">
      <Sidebar />
      <Box className="w-full h-full px-4 py-8"><Outlet/></Box>
    </Box>
  );
};

export default Layout;

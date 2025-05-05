import { Box } from '@mui/material';
import { ReactNode } from 'react';
import Sidebar from './sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Box className="!w-screen !fixed !inset-0 flex flex-col lg:flex-row lg:h-full">
      {/* Sidebar - hidden on small screens, shown on large screens */}
      <Box className="lg:block hidden text-black h-full">
        <Sidebar />
      </Box>

      {/* Main content - adjust layout when sidebar is hidden */}
      <Box className="w-full h-full px-4 py-8">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;

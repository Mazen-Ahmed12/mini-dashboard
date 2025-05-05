import {
  AppBar,
  Box, IconButton,
  Toolbar,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Sidebar from './sidebar';

const Layout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex', width: '100vw', height: '100vh' }}>

      {isMobile && (
        <AppBar position="fixed"  sx={{ backgroundColor: '#72A333' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleToggleSidebar}
            >
              <MenuIcon />
            </IconButton>
            <Box component="span" sx={{ ml: 2 }}>
              My App
            </Box>
          </Toolbar>
        </AppBar>
      )}

      {!isMobile || sidebarOpen ? (
        <Box
          sx={{
            width: 256,
            position: isMobile ? 'fixed' : 'relative',
            zIndex: isMobile ? 1200 : 'auto',
            height: isMobile ? 'calc(100% - 64px)' : '100%',
            top: isMobile ? '64px' : 0,
            backgroundColor: '#f2f2f2',
          }}
        >
          <Sidebar onLinkClick={isMobile ? handleToggleSidebar : undefined} />
        </Box>
      ) : null}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: 3,
          py: 5,
          width: { lg: `calc(100% - 256px)` },
          mt: isMobile ? '64px' : 0,
          overflowY: 'auto',
          ml: isMobile&&sidebarOpen  ? '256px' : 0
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;

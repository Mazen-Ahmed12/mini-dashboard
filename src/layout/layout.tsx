// import {
//   AppBar,
//   Box,
//   Drawer,
//   IconButton,
//   Toolbar,
//   useMediaQuery,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Outlet } from 'react-router-dom';
// import { useState } from 'react';
// import { useTheme } from '@mui/material/styles';
// import Sidebar from './sidebar';

// const drawerWidth = 256;

// const Layout = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   return (
//     <Box sx={{ display: 'flex', width: '100vw', height: '100vh' }}>
//       {/* AppBar for mobile */}
//       {isMobile && (
//         <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1,  backgroundColor: '#72A333' }}>
//           <Toolbar>
//             <IconButton
//               color="inherit"
//               edge="start"
//               onClick={handleDrawerToggle}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Box component="span" sx={{ ml: 2 }}>
//               My App
//             </Box>
//           </Toolbar>
//         </AppBar>
//       )}

//       {/* Drawer */}
//       {isMobile ? (
//         <Drawer
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{ keepMounted: true }}
//           sx={{
//             '& .MuiDrawer-paper': {
//               width: drawerWidth,
//               marginTop: '64px', 
//               height: 'calc(100% - 64px)',
//             },
//           }}
//         >
//           <Sidebar />
//         </Drawer>
//       ) : (
//         <Drawer
//           variant="permanent"
//           open
//           sx={{
//             width: drawerWidth,
//             flexShrink: 0,
//             [`& .MuiDrawer-paper`]: {
//               width: drawerWidth,
//               boxSizing: 'border-box',
//             },
//           }}
//         >
//           <Sidebar />
//         </Drawer>
//       )}

//       {/* Main content */}
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           width: { lg: `calc(100% - ${drawerWidth}px)` },
//           mt: isMobile ? '64px' : 0, // offset AppBar height on mobile
//           overflowY: 'auto',
//         }}
//       >
//         <Outlet />
//       </Box>
//     </Box>
//   );
// };

// export default Layout;

// import {
//   AppBar,
//   Box,
//   Drawer,
//   IconButton,
//   Toolbar,
//   useMediaQuery,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Outlet } from 'react-router-dom';
// import { useState } from 'react';
// import { useTheme } from '@mui/material/styles';
// import Sidebar from './sidebar';

// const drawerHeight = 300;

// const Layout = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prev) => !prev);
//   };

//   const handleCloseDrawer = () => {
//     setMobileOpen(false);
//   };

//   return (
//     <Box sx={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
//       {/* AppBar for mobile only */}
//       {isMobile && (
//         <AppBar
//           position="fixed"
//           sx={{ zIndex: theme.zIndex.drawer + 1, backgroundColor: '#72A333' }}
//         >
//           <Toolbar>
//             <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
//               <MenuIcon />
//             </IconButton>
//             <Box component="span" sx={{ ml: 2 }}>My App</Box>
//           </Toolbar>
//         </AppBar>
//       )}

//       {/* Top Drawer for mobile only */}
//       {isMobile && (
//         <Drawer
//           anchor="top"
//           open={mobileOpen}
//           onClose={handleCloseDrawer}
//           ModalProps={{ keepMounted: true }}
//           sx={{
//             '& .MuiDrawer-paper': {
//               height: drawerHeight,
//             },
//           }}
//         >
//           <Sidebar onLinkClick={handleCloseDrawer} />
//         </Drawer>
//       )}

//       {/* Main Content */}
//       <Box
//         component="main"
//         sx={{
//           mt: isMobile ? '64px' : 0, // offset AppBar only on mobile
//           p: 3,
//           height: '100%',
//           overflowY: 'auto',
//         }}
//       >
//         <Outlet />
//       </Box>
//     </Box>
//   );
// };

// export default Layout;

// import {
//   AppBar,
//   Box,
//   Collapse,
//   IconButton,
//   Toolbar,
//   useMediaQuery,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Outlet } from 'react-router-dom';
// import { useState } from 'react';
// import { useTheme } from '@mui/material/styles';
// import Sidebar from './sidebar';

// const Layout = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prev) => !prev);
//   };

//   const handleCloseDrawer = () => {
//     setMobileOpen(false);
//   };

//   return (
//     <Box sx={{ width: '100vw', minHeight: '100vh',  margintop: "100" }}>
//       {/* AppBar (always visible on mobile) */}
//       {isMobile && (
//         <AppBar position="fixed" sx={{ backgroundColor: '#72A333' }}>
//           <Toolbar>
//             <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
//               <MenuIcon />
//             </IconButton>
//             <Box component="span" sx={{ ml: 2 }}>My App</Box>
//           </Toolbar>
//         </AppBar>
//       )}

//       {/* Sidebar Drawer shown below AppBar */}
//       {isMobile && (
//         <Collapse className='w-full pt-10' in={mobileOpen} timeout="auto" unmountOnExit>
//           <Sidebar onLinkClick={handleCloseDrawer} />
//         </Collapse>
//       )}

//       {/* Main Content */}
//       <Box sx={{ px: 3 }}>
//         <Outlet />
//       </Box>
//     </Box>
//   );
// };

// export default Layout;

import {
  AppBar,
  Box,
  Collapse,
  IconButton,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Sidebar from './sidebar';

const Layout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleCloseDrawer = () => {
    setMobileOpen(false);
  };

  return (
    <Box sx={{ width: '100vw', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* AppBar for mobile only */}
      {isMobile && (
        <AppBar position="fixed" sx={{ backgroundColor: '#72A333' }}>
          <Toolbar>
            <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Box component="span" sx={{ ml: 2 }}>My App</Box>
          </Toolbar>
        </AppBar>
      )}

      {/* Sidebar under AppBar in mobile */}
      {isMobile && (
        <Collapse in={mobileOpen} timeout="auto" unmountOnExit>
          <Box sx={{ pt: '64px', backgroundColor: '#f2f2f2' }}>
            <Sidebar onLinkClick={handleCloseDrawer} />
          </Box>
        </Collapse>
      )}

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          mt: isMobile ? (mobileOpen ? 0 : '70px') : 0,
          width: '100%',
          height: '100%',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;

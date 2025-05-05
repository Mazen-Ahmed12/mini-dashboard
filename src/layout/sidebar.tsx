import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Home, Person } from '@mui/icons-material';

const Sidebar = ({ onLinkClick }: { onLinkClick?: () => void }) => {
  return (
    <Box className="bg-[#f2f2f2] h-full pt-3">
      <List>
        <ListItem disablePadding>
          <NavLink
            to="/dashboard/property"
            onClick={onLinkClick}
            
            className={({ isActive }) =>
              `block w-full justify-center ${
                isActive
                  ? '!bg-[#fcfcfc] !text-[#0088cc]'
                  : 'hover:!text-white hover:!bg-[#33b5e5] !text-black'
              }`
            }
          >
            <ListItemButton>
              <Home className="mr-3" />
              <ListItemText primary="Properties" />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink
            to="/dashboard/tenant"
            onClick={onLinkClick}
            className={({ isActive }) =>
              `block w-full justify-center ${
                isActive
                  ? '!bg-[#fcfcfc] !text-[#0088cc]'
                  : 'hover:!text-white hover:!bg-[#33b5e5] !text-black'
              }`
            }
          >
            <ListItemButton>
              <Person className="mr-3" />
              <ListItemText primary="Tenants" />
            </ListItemButton>
          </NavLink>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;

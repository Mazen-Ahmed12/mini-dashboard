import { Box, Icon, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import {Home,Person} from '@mui/icons-material';
const Sidebar = () => {
  return (
    <Box className="bg-[#f2f2f2] w-64 min-w-[200px] pt-3">
      <List>
        <ListItem disablePadding >
          <ListItemButton component={NavLink} to="/dashboard/property">
            <Home className="mr-3"/>
            <ListItemText primary="Properties" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/dashboard/tenant">
          <Person className="mr-3"/>
            <ListItemText primary="Tenants" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
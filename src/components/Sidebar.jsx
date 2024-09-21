import PropTypes from 'prop-types';
import { AccountBox, Bookmark, Event, Groups, Home, ModeNight, Settings, ShoppingBag } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';

const Sidebar = ({ setDarkModeToggle, darkModeToggle }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#event">
              <ListItemIcon>
                <Event />
              </ListItemIcon>
              <ListItemText primary="Event" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#groups">
              <ListItemIcon>
                <Groups />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#marketplace">
              <ListItemIcon>
                <ShoppingBag />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#bookmark">
              <ListItemIcon>
                <Bookmark />
              </ListItemIcon>
              <ListItemText primary="Bookmark" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#settings">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#modeNight">
              <ListItemIcon>
                <ModeNight sx={{ color: darkModeToggle === 'dark' ? 'yellow' : 'inherit' }} />
              </ListItemIcon>
              <Switch onChange={() => setDarkModeToggle(darkModeToggle === 'light' ? 'dark' : 'light')} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
Sidebar.propTypes = {
  setDarkModeToggle: PropTypes.func.isRequired, // setDarkModeToggleは関数で必須
  darkModeToggle: PropTypes.string.isRequired, // darkModeToggleは文字列で必須
};
export default Sidebar;

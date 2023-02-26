import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems } from '../listItems';
import { Drawer } from '../../styles';

interface DrawerComponentProps {
  toggleDrawer: () => void;
  open: boolean;
}

export default function DrawerComponent({
  toggleDrawer,
  open,
}: DrawerComponentProps) {
  return (
    <>
      <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
          </List>
        </Drawer>
    </>
  );
}

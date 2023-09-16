import { IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { PlusIcon } from '@heroicons/react/24/solid'


const SideMenu = (
  {
    id
  }: {
    id: number
  }
) => {
  
  console.log(id);

  return (
    <div className="flex flex-col flex-1 gap-2">
      <div className="bg-zinc-900 rounded-lg">
        <ul>
          <IconButton aria-label="Example">
            <PlusIcon style={{ width: 24, height: 24 }} />
          </IconButton>
          <IconButton aria-label="Example">
            <PlusIcon style={{ width: 24, height: 24 }} />
          </IconButton>
        </ul>
      </div>

      <div className="bg-zinc-900 rounded-lg flex-1">
        <ul>
          <IconButton aria-label="Example">
            <PlusIcon style={{ width: 24, height: 24 }} />
          </IconButton>
        </ul>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default SideMenu;

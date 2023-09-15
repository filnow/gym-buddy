import { IconButton } from "@mui/material";
import { PlusIcon } from '@heroicons/react/24/solid'

const SideMenu = () => {
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
      </div>
    </div>
  );
};

export default SideMenu;

import CategoryFilter from "./CategoryFilter";
import { IconButton } from "@mui/material";
import { PlusIcon } from '@heroicons/react/24/solid';

const FilterMenu = () => {
  return (
    <div className="flex flex-col flex-1 gap-2">
      <div className="bg-zinc-900 rounded-lg">
        <ul>
          <IconButton aria-label="Example">
            <PlusIcon className="w-6 h-6" />
          </IconButton>
        </ul>
      </div>

      <div className="bg-zinc-900 rounded-lg flex-1">
        <ul>
          <IconButton aria-label="Example">
            <PlusIcon className="w-6 h-6" />
          </IconButton>
          <div className="ml-5 overflow-hidden">
            <CategoryFilter/>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default FilterMenu;
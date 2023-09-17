import { IconButton } from "@mui/material";
import SideCard from "./SideCard";
import HomeIcon from '@mui/icons-material/Home';


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
      <div className="bg-slate-300 rounded-lg">
        <IconButton aria-label="Example">
          <HomeIcon className="w-24 h-24 ml-2" />
        </IconButton>
      </div>
      <div className="bg-slate-300 rounded-lg flex-1">
        <SideCard />
        <SideCard />
      </div>
    </div>
  );
};

export default SideMenu;

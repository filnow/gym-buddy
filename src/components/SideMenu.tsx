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
  

  return (
    <div className="flex flex-col flex-1 gap-2">
      <div className="bg-slate-300 rounded-lg">
        <IconButton aria-label="Example">
          <HomeIcon className="w-24 h-24 ml-2" />
        </IconButton>
      </div>
      <div className="bg-slate-300 rounded-lg flex-1">
        <SideCard id={id}/>
      </div>
    </div>
  );
};

export default SideMenu;

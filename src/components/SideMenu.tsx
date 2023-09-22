import HomeIcon from '@mui/icons-material/Home';
import ClearIcon from '@mui/icons-material/Clear';
import { List, ListItemButton, ListItemIcon, ListItemText, IconButton } from "@mui/material";


type SideMenuProps = {
  exerciseList: Array<string>;
  setExerciseList: (data: Array<string>) => void;
};

const SideMenu = ({ exerciseList, setExerciseList }: SideMenuProps) => {
	
	const handleDelete = (exerciseNameToDelete: string) => {
    setExerciseList(exerciseList.filter(exercise => exercise !== exerciseNameToDelete));
  }


  return (
    <div className="flex flex-col flex-1 gap-2">
      <div className="bg-slate-300 rounded-lg">
        <IconButton aria-label="Example">
          <HomeIcon className="w-24 h-24 ml-2" />
        </IconButton>
      </div>
      <div className="bg-slate-300 rounded-lg flex-1">
        <List>
          {exerciseList.map((exerciseItem, index) => (
              <ListItemButton key={index}>
                  <ListItemIcon>
                    <ClearIcon onClick={() => handleDelete(exerciseItem)}/>
                  </ListItemIcon>
                  <ListItemText primary={exerciseItem} />
              </ListItemButton>
          ))}
        </List>
      </div>
    </div>
  );
};

export default SideMenu;

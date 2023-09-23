import HomeIcon from '@mui/icons-material/Home';
import ClearIcon from '@mui/icons-material/Clear';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { List, ListItemButton, ListItemText, IconButton, ListItem, Modal } from "@mui/material";
import { useState } from 'react';
import ExerciseParams from './ExerciseParams';


interface SideMenuProps {
  exerciseObject: {};
  setExerciseObject: (data: {}) => void;
};

interface ExerciseObject {
  [key: string]: {};
}


const SideMenu = ({ exerciseObject, setExerciseObject }: SideMenuProps) => {

	const handleDelete = (exerciseNameToDelete: string) => {
    setExerciseObject((prevData: ExerciseObject) => {
      const { [exerciseNameToDelete]: deletedItem, ...newData } = prevData;
      return newData;
    });
  }

  const [open, setOpen] = useState(false);
  const [exerciseName, setExerciseName] = useState("");

  const handleOpen = (exerciseNameToAdd: string) => {
    setOpen(true);
    setExerciseName(exerciseNameToAdd);
  }
  const handleClose = () => setOpen(false);


  return (
    <div className="flex flex-col flex-1 gap-2">
      <div className="bg-slate-300 rounded-lg">
        <IconButton aria-label="Example">
          <HomeIcon className="w-24 h-24 ml-2" />
        </IconButton>
      </div>
      <div className="bg-slate-300 rounded-lg flex-1">
        <List>
          {Object.keys(exerciseObject).map((exerciseItem, index) => (
              <ListItem key={index}>
                  <ListItemText primary={exerciseItem} />
                  <ListItemButton onClick={() => handleOpen(exerciseItem)}>
                    <FitnessCenterIcon />
                  </ListItemButton>
                  <ListItemButton onClick={() => handleDelete(exerciseItem)}>
                    <ClearIcon/>
                  </ListItemButton>
              </ListItem>
          ))}
        </List>
      </div>
      <Modal open={open} onClose={handleClose}>
        <ExerciseParams exerciseName={exerciseName} exerciseObject={exerciseObject} setModalState={handleClose} setExerciseObject={setExerciseObject}/>
      </Modal>
    </div>
  );
};

export default SideMenu;

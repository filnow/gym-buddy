import HomeIcon from '@mui/icons-material/Home';
import ClearIcon from '@mui/icons-material/Clear';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { List, ListItemButton, ListItemText, IconButton, ListItem, Modal, Collapse, Divider } from "@mui/material";
import { useState } from 'react';
import ExerciseParams from './ExerciseParams';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Categories } from '../enum/Category';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import TuneIcon from '@mui/icons-material/Tune';


interface SideMenuProps {
  exerciseObject: {};
  setExerciseObject: (data: {}) => void;
  setFilterData: (data: Array<boolean>) => void;
};

interface ExerciseObject {
  [key: string]: {};
}

const formControlLabelStyle = {
  "& .MuiFormControlLabel-label": {
    fontSize: "1rem",
    width: 300
  }
}

const SideMenu = ({ exerciseObject, setExerciseObject, setFilterData }: SideMenuProps) => {

	const handleDelete = (exerciseNameToDelete: string) => {
    setExerciseObject((prevData: ExerciseObject) => {
      const { [exerciseNameToDelete]: deletedItem, ...newData } = prevData;
      return newData;
    });
  }

  const [open, setOpen] = useState(false);
  const [exerciseName, setExerciseName] = useState("");
  const [collapseOpen, setCollapseOpen] = useState(false);

  const [checkedState, setCheckedState] = useState(
    new Array(Object.keys(Categories).length).fill(false)
  );

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    
    setFilterData(updatedCheckedState)
    setCheckedState(updatedCheckedState);
  };


  const handleOpen = (exerciseNameToAdd: string) => {
    setOpen(true);
    setExerciseName(exerciseNameToAdd);
  }
  const handleClose = () => setOpen(false);

  const handleCollapseChange = () => setCollapseOpen(!collapseOpen);

  return (
    <div className="flex flex-col flex-1 gap-2">
      <div className="bg-slate-300 rounded-lg">
        <IconButton>
          <HomeIcon className="w-24 h-24 ml-2" />
        </IconButton>
      </div>
      <div className="bg-slate-300 rounded-lg flex-1">
        <IconButton onClick={handleCollapseChange}>
          <ListItemText primary="Category filters" />
          <TuneIcon className="w-24 h-24 ml-2" />
          {collapseOpen ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
        <Divider />
        <Collapse in={collapseOpen} timeout="auto" unmountOnExit>
          <FormGroup>
            {Object.keys(Categories).map((name, index) => {
            return (
              <div className="toppings-list-item ml-7">
                  <div className="left-section">
                  <FormControlLabel control={
                      <Checkbox
                          checked={checkedState[index]}
                          onChange={() => handleOnChange(index)}
                          inputProps={{ 'aria-label': 'controlled' }}
                      />} 
                  label={name} sx={{...formControlLabelStyle}}/>
                  </div>
              </div>
            );
            })}
          </FormGroup>
        </Collapse>
        <Divider />
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

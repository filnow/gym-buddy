import ClearIcon from '@mui/icons-material/Clear';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { List, ListItemButton, ListItemText, IconButton, ListItem, Modal, Collapse, Divider, Button } from "@mui/material";
import { useState } from 'react';
import ExerciseParams from './ExerciseParams';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Categories } from '../enum/Category';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import TuneIcon from '@mui/icons-material/Tune';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/store';
import { selectUserUid } from '../slices/authSlice';
import { SideMenuProps, ExerciseObject } from '../types/PropsType';
import { useAddWorkout } from '../api/wokrouts';
import { Timestamp } from 'firebase/firestore';


const formControlLabelStyle = {
  "& .MuiFormControlLabel-label": {
    fontSize: "1rem",
    width: 300
  }
}

export default function ExerciseMenu({ exerciseObject, setExerciseObject, setFilterData }: SideMenuProps) {

  const navigate = useNavigate();
  const { mutate } = useAddWorkout();

  const userUid = useAppSelector(selectUserUid);

  const [open, setOpen] = useState(false);
  const [exerciseName, setExerciseName] = useState("");
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(Object.keys(Categories).length).fill(false)
  );

	const handleDelete = (exerciseNameToDelete: string) => {
    setExerciseObject((prevData: ExerciseObject) => {
      const { [exerciseNameToDelete]: deletedItem, ...newData } = prevData;
      return newData;
    });
  }

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
  };



  const sendWorkout = () => {
    mutate({ owner: userUid, 
             date: Timestamp.fromDate(new Date()),
             exercises: exerciseObject },
      {
        onSuccess: () => {
          setExerciseObject({});
          navigate('/');
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  }

  return (
    <>
      <List className="bg-slate-300 rounded-lg flex-1">
        <IconButton onClick={() => setCollapseOpen(!collapseOpen)}>
          <ListItemText primary="Category filters" />
          <TuneIcon className="w-24 h-24 ml-20" />
          {collapseOpen ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
        <Divider />
        <Collapse in={collapseOpen} timeout="auto" unmountOnExit>
          <FormGroup>
            {Object.keys(Categories).map((name, index) => {
            return (
              <List>
                <ListItem key={index}>
                  <FormControlLabel control={
                      <Checkbox
                          checked={checkedState[index]}
                          onChange={() => handleOnChange(index)}
                          inputProps={{ 'aria-label': 'controlled' }}
                      />} 
                  label={name} sx={{...formControlLabelStyle}}/>
                </ListItem>
              </List>
            );
            })}
          </FormGroup>
        </Collapse>
        {collapseOpen ? <Divider /> : null}
        <ListItemText className='ml-2'>
          Add exercises to your workout below:
        </ListItemText>
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
        {Object.keys(exerciseObject).length > 0 ? (
        <>
          <Divider />
          <Button onClick={sendWorkout}>
            Add workout plan!
          </Button> 
        </>
        ) : null}
      </List>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ExerciseParams exerciseName={exerciseName} 
                        setModalState={() => setOpen(false)} 
                        setExerciseObject={setExerciseObject}/>
      </Modal>
    </>
  );
};



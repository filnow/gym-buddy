import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Categories } from '../enum/Category';
import { IconButton } from "@mui/material";
import { PlusIcon } from '@heroicons/react/24/solid';


interface CategoryFilterProps {
  sendData: (data: Array<boolean>) => void;
}

const formControlLabelStyle = {
  "& .MuiFormControlLabel-label": {
    fontSize: "1.5rem",
    width: 300
  }
}

export default function CategoryFilter(props : CategoryFilterProps){

    const [checkedState, setCheckedState] = useState(
        new Array(Object.keys(Categories).length).fill(false)
      );
	
    const handleOnChange = (position: number) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        
        props.sendData(updatedCheckedState)
        setCheckedState(updatedCheckedState);
      };

	return (
    <div className="flex flex-col flex-1 gap-2">
      <div className="bg-slate-300 rounded-lg flex-1">
        <ul>
          <IconButton aria-label="Example">
            <PlusIcon className="w-6 h-6" />
          </IconButton>
          <div className="ml-5 overflow-hidden">
            <FormGroup>
                {Object.keys(Categories).map((name, index) => {
                return (
                    <li key={index}>
                    <div className="toppings-list-item">
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
                    </li>
                );
                })}
            </FormGroup>
          </div>
        </ul>
      </div>
    </div>
	);
}

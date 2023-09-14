import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function CategoryFilter({
    count: initialCount,
}: {
    count: boolean;
}

) {

    const Categories = [
        'Arms',
        'Legs',
        'Abs',
        'Chest',
        'Back',
        'Shoulders',
        'Cardio',
        'Streching',
    ] as const;


    const [checkedState, setCheckedState] = useState(
        new Array(Categories.length).fill(false)
      );
	
    const handleOnChange = (position: number) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);

        const totalPrice = updatedCheckedState.reduce(
          (sum, currentState, index) => {
            if (currentState === true) {
              return sum + Categories[index];
            }
            return sum;
          },
          0
        );
    
      };
    
    
    const formControlLabelStyle = {
        "& .MuiFormControlLabel-label": {
          fontSize: "1.5rem",
          width: 300,
          color: 'rgba(161,159,147,255)',
        }
      }

	return (
		<>
            <FormGroup>
                {Categories.map((name, index) => {
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
		</>
	);
}

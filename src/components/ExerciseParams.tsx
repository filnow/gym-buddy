import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ExerciseField } from '../enum/ExerciseField';
import { inputFields } from '../constants/InputFields';
import { ExerciseDataState } from '../types/ExerciseDataType';


interface ExerciseInputProps {
    exerciseName: string;
    setModalState: () => void;
}


const ExerciseInput = ({exerciseName, setModalState} : ExerciseInputProps) => {

    const [exerciseData, setExerciseData] = useState<ExerciseDataState>({
        [ExerciseField.NumSeries]: 0,
        [ExerciseField.NumReps]: 0,
        [ExerciseField.Weight]: 0,
        [ExerciseField.Comments]: '',
      });

    console.log(exerciseData);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, field: ExerciseField) => {
        const newValue = field === ExerciseField.Weight ? parseFloat(event.target.value) || 0 : event.target.value;
        setExerciseData(prevData => ({
        ...prevData,
        [field]: newValue,
        }));
    };

    const handleSave = () => {
        setModalState();
    };

    return (
        <Box
          className="fixed inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-50 bg-white p-4 rounded-lg shadow-lg flex flex-col"
        >
          <Box className="bg-white p-4 rounded-lg shadow-lg flex flex-col">
            {inputFields.map((fieldInfo) => (
              <Box key={fieldInfo.field} className="mb-4 text-center">
                <TextField
                  label={fieldInfo.label}
                  type={fieldInfo.type}
                  multiline={fieldInfo.multiline}
                  value={exerciseData[fieldInfo.field]}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, fieldInfo.field)}
                />
              </Box>
            ))}
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
          </Box>
        </Box>
      );
};

export default ExerciseInput;

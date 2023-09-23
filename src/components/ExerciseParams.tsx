import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ExerciseField } from '../enum/ExerciseField';
import { inputFields } from '../constants/InputFields';
import { ExerciseDataState } from '../types/ExerciseDataType';
import { defaultExerciseData } from '../constants/DeafaultParams';


interface ExerciseInputProps {
    exerciseName: string;
    exerciseList: {};
    setModalState: () => void;
    setExerciseList: (data: {}) => void;
}


const ExerciseInput = ({exerciseName, exerciseList, setModalState, setExerciseList} : ExerciseInputProps) => {

    const [exerciseData, setExerciseData] = useState<ExerciseDataState>(defaultExerciseData);
    
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

    useEffect(() => {
      setExerciseList((prevExerciseList: {}) => ({
        ...prevExerciseList,
        [exerciseName]: exerciseData,
      }));
      console.log(exerciseList);
    }
    , [exerciseData]);


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

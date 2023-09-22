import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface ExerciseInputProps {
    setModalState: () => void;
}

const ExerciseInput = ({setModalState} : ExerciseInputProps) => {
    
  const [numSeries, setNumSeries] = useState<number>(0);
  const [numReps, setNumReps] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [comments, setComments] = useState<string>('');

  const handleSeriesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNumSeries = parseInt(event.target.value, 10) || 0;
    setNumSeries(newNumSeries);
  };

  const handleRepsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNumReps = parseInt(event.target.value, 10) || 0;
    setNumReps(newNumReps);
  };

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newWeight = parseFloat(event.target.value) || 0;
    setWeight(newWeight);
  };

  const handleCommentsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newComments = event.target.value;
    setComments(newComments);
  };

  const handleSave = () => {
    setModalState();
  };

  return (
    <Box
      className="fixed inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-50"
      style={{ width: '100vw', height: '100vh' }}
    >
      <Box className="bg-white p-4 rounded-lg shadow-lg flex flex-col">
        <Box className="mb-4 text-center">
          <TextField
            label="Number of Series"
            type="number"
            onChange={handleSeriesChange}
            value={numSeries}
          />
        </Box>
        <Box className="mb-4 text-center">
          <TextField
            label="Number of Reps"
            type="number"
            onChange={handleRepsChange}
            value={numReps}
          />
        </Box>
        <Box className="mb-4 text-center">
          <TextField
            label="Weight"
            type="number"
            onChange={handleWeightChange}
            value={weight}
          />
        </Box>
        <Box className="mb-4 text-center">
          <TextField
            label="Comments"
            multiline
            onChange={handleCommentsChange}
            value={comments}
          />
        </Box>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default ExerciseInput;

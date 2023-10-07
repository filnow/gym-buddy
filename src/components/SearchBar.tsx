import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Box, IconButton, InputBase, Paper } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { SearchBarProps } from '../types/PropsType';


export default function SearchBar({ sendData } : SearchBarProps){

  const [inputText, setInputText] = useState("");

  const handleInput = (input: string) => {
    setInputText(input);
    sendData(input);
  };

  return (
    <Box className="w-full sm:w-1/2 lg:w-1/2 mt-10 ml-4 justify-center">
      <Paper
        component="form"
        className="p-2 px-4 flex items-center w-400 ml-2"
      >
        <IconButton disabled={true} >
          <SearchIcon className="w-5 h-5 text-gray-400"/>
        </IconButton>
        <InputBase
          className="ml-1 flex-1"
          placeholder="Search exercises..."
          onChange={(e) => handleInput(e.target.value.toLowerCase())}
          value={inputText}
        />
        <IconButton aria-label="delete" onClick={() => handleInput("")} >
              <DeleteIcon className="w-5 h-5 text-gray-400"/>
        </IconButton>
      </Paper>
    </Box>
   
  );
};



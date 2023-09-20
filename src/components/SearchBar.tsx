import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { IconButton, InputBase, Paper } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


interface SearchBarProps {
  sendData: (data: string) => void;
}

export default function SearchBar(props : SearchBarProps){

  const [inputText, setInputText] = useState("");

  const handleInput = (input: string) => {
    setInputText(input);
    props.sendData(input);
  };

  return (
    <Paper
      component="form"
      className="p-2 px-4 flex items-center w-400 ml-2"
    >
      <IconButton aria-label="menu" disabled={true} >
        <SearchIcon className="w-5 h-5 text-gray-400"/>
      </IconButton>
      <InputBase
        className="ml-1 flex-1"
        placeholder="Search exercises..."
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(e) => handleInput(e.target.value.toLowerCase())}
        value={inputText}
      />
      <IconButton aria-label="delete" onClick={() => handleInput("")} >
            <DeleteIcon className="w-5 h-5 text-gray-400"/>
      </IconButton>
    </Paper>
   
  );
};



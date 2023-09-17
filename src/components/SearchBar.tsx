import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { IconButton, InputBase, Paper } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


export default function SearchBar(props : any){

  const [inputText, setInputText] = useState("");

  let inputHandler = (e : any) => {
    setInputText( e.target.value.toLowerCase());
  };

  const onDelete = () => {
    setInputText("");
  }

  useEffect(() => {
    props.sendData(inputText);
  }, [inputText]);

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
        onChange={inputHandler}
        value={inputText}
      />
      <IconButton aria-label="delete" onClick={onDelete} >
            <DeleteIcon className="w-5 h-5 text-gray-400"/>
      </IconButton>
    </Paper>
   
  );
};



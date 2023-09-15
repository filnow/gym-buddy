import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { IconButton } from "@mui/material";
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
    <form>   
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
        </div>
        <input 
              id="default-search" 
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Search exercises..." 
              onChange={inputHandler}
              value={inputText}></input>
        <div className="absolute inset-y-0 right-0 flex items-center pl-3">
          <IconButton aria-label="delete" onClick={onDelete} >
            <DeleteIcon className="w-5 h-5 text-gray-400"/>
          </IconButton>
        </div>
      </div>
    </form>
  );
};



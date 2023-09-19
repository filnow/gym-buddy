import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { categories } from '../constants/CategoryList';
import ClearIcon from '@mui/icons-material/Clear';


export default function SideCard(
    {
        id
    }: {
        id: number
    }
) {
    
    const exercise = categories.flatMap(category => category.data).find(exercise => exercise.id === id)?.name;

    const [open, setOpen] = useState(false);
    const [exerciseList, setExerciseList] = useState<string[]>([]);

    const handleClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        if (exercise && !exerciseList.includes(exercise)) {
            setExerciseList(prevExerciseList => [...prevExerciseList, exercise]);
        }
    }, [id]);
    
    const handleDelete = (indexToDelete: number) => {
        setExerciseList((prevExerciseList) =>
          prevExerciseList.filter((_, index) => index !== indexToDelete)
        );
      };


    return (
        <List>
            {exerciseList.map((exerciseItem, index) => (
                <ListItemButton key={index}>
                    <ListItemIcon>
                        <ClearIcon onClick={() => handleDelete(index)}/>
                    </ListItemIcon>
                    <ListItemText primary={exerciseItem} />
                    <ListItemIcon onClick={handleClick}>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemIcon>
                </ListItemButton>
            ))}
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                    <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );

}
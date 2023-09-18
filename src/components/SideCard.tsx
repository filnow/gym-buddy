import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import { categories } from '../constants/CategoryList';
import ClearIcon from '@mui/icons-material/Clear';


export default function SideCard(
    {
        id
    }: {
        id: number
    }
) {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    
    const exercise = categories.flatMap(category => category.data).find(exercise => exercise.id === id)?.name;


    console.log(exercise);
    return (
        <List>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <ClearIcon />
                </ListItemIcon>
                <ListItemText primary={exercise} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
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
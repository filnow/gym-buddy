import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { WorkoutsMenuProps } from "../types/PropsType";
import { WorkoutExercisesObject } from "../types/WorkoutType";
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { useRemoveWorkout } from "../api/wokrouts";

export default function WorkoutsMenu({ data }: WorkoutsMenuProps) {

    const exercises: Array<WorkoutExercisesObject> = data ? data.flatMap(workout => workout.exercises) : [];
    const deleteWorkout = useRemoveWorkout();

    const handleDelete = async (id: string) => {
        deleteWorkout.mutate(id, {
            onSuccess: () => {
                console.log("Workout deleted");
            },
            onError: (error) => {
                console.log(error);
            },
        });
    }
    
    return (    
        <>
            {exercises.map((exercise, index) => {
                const formattedDate: string = data ? new Date(data[index].date.seconds * 1000).toLocaleDateString() : '';
                const id: string = data ? data[index].id : '';
                
                return (
                    <Card sx={{width: '20vw', height: '45vh'}}>
                        <CardContent>
                            <IconButton sx={{float: 'right'}} onClick={() => handleDelete(id)}>
                                <CloseSharpIcon/>
                            </IconButton>
                            <Typography sx= {{marginBottom: '5%', marginTop: '3%'}}>
                                Date: {formattedDate}
                            </Typography>
                            {Object.values(exercise).map((item, index) => {
                                return (
                                    <Typography sx={{ marginBottom: '5%' }}>
                                        {index}: {Object.keys(exercise)[index]} - {item.weight} kg / {item.numSeries} / {item.numReps} 
                                    </Typography>
                                );
                            })}
                        </CardContent>
                    </Card>
                );
            })}
        </>
        
    );
}
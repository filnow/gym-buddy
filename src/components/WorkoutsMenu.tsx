import { Card, CardContent, Typography } from "@mui/material";
import { WorkoutsMenuProps } from "../types/PropsType";
import { WorkoutExercisesObject } from "../types/WorkoutType";


export default function WorkoutsMenu({ data }: WorkoutsMenuProps) {

    const exercises: Array<WorkoutExercisesObject> = data ? data.flatMap(workout => workout.exercises) : [];
    
    return (    
        <>
            {exercises.map((exercise, index) => {
                const workoutDateObject: number = data ? data[index].date.seconds : 0; 
                const formattedDate: string = new Date(workoutDateObject * 1000).toLocaleDateString();
                
                return (
                    <Card sx={{width: '20vw', height: '45vh'}}>
                        <CardContent>
                            <Typography sx= {{marginBottom: '5%'}}>
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
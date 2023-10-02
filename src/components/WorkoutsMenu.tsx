import { Card, CardContent, Typography } from "@mui/material";
import { Workout } from "../types/WorkoutType";


interface WorkoutsMenuProps {
    data?: Workout[];
}

export default function WorkoutsMenu({ data }: WorkoutsMenuProps) {

    const exercisesKeys = data?.flatMap(workout => workout.exercises).map(exercise => Object.keys(exercise));

    return (    
        <>
            {exercisesKeys?.map((exercise, index) => {

                const workoutDateObject = data?.[index].date.seconds; 
                const formattedDate = workoutDateObject ? new Date(workoutDateObject * 1000).toLocaleDateString() : '';
                
                return (
                    <Card sx={{width: '20vw', height: '45vh'}}>
                        <CardContent>
                            <Typography sx= {{marginBottom: '5%'}}>
                                Date: {formattedDate}
                            </Typography>
                            {exercise.map((item, index) => {
                                return (
                                    <Typography sx= {{marginBottom: '5%'}}>
                                       {index}: {item}
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
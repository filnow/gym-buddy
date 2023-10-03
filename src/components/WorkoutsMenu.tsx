import { Card, CardContent, Typography } from "@mui/material";
import { Workout } from "../types/WorkoutType";


interface WorkoutsMenuProps {
    data?: Workout[];
}

export default function WorkoutsMenu({ data }: WorkoutsMenuProps) {

    const exercisesKeys = data?.flatMap(workout => workout.exercises).map(exercise => Object.keys(exercise));
    const exercisesValues = data?.flatMap(workout => workout.exercises).map(exercise => Object.values(exercise));

    const combinedExercises = data
        ?.flatMap(workout => workout.exercises)
        .map(exercise => ({
            keys: Object.keys(exercise),
            values: Object.values(exercise),
        }));

    const combinedKeys = combinedExercises?.map(exercise => exercise.keys);

    return (    
        <>
            {exercisesKeys?.map((exercise, index) => {

                const workoutDateObject = data?.[index].date.seconds; 
                const formattedDate = workoutDateObject ? new Date(workoutDateObject * 1000).toLocaleDateString() : '';
                const params = exercisesValues?.[index]
                
                return (
                    <Card sx={{width: '20vw', height: '45vh'}}>
                        <CardContent>
                            <Typography sx= {{marginBottom: '5%'}}>
                                Date: {formattedDate}
                            </Typography>
                            {exercise.map((item, index) => {
                                const paramsIndex = params?.[index];
                                const formattedParams = paramsIndex ? Object.values(paramsIndex) : '';

                                return (
                                    <Typography sx={{ marginBottom: '5%' }}>
                                        {index}: {item} - {formattedParams[1]} kg / {formattedParams[0]} / {formattedParams[3]}
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
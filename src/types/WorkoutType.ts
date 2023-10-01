import { ExerciseObject } from "./PropsType";


export interface Workout {
    owner: string;
    date: Date;
    exercises: ExerciseObject;
}
import { Timestamp } from "firebase/firestore";
import { ExerciseObject } from "./PropsType";
import { ExerciseField } from "../enum/ExerciseField";


export interface Workout {
    owner: string;
    date: Timestamp;
    exercises: ExerciseObject;
}

export interface WorkoutExercises {
    [ExerciseField.NumSeries]: number,
    [ExerciseField.NumReps]: number,
    [ExerciseField.Weight]: number,
    [ExerciseField.Comments]: string,
}

export interface WorkoutExercisesObject {
    [x: string]: WorkoutExercises;
}
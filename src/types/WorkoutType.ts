import { Timestamp } from "firebase/firestore";
import { ExerciseObject } from "./PropsType";


export interface Workout {
    owner: string;
    date: Timestamp;
    exercises: ExerciseObject;
}
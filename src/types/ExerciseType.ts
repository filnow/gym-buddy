import { colors } from "../lib/CategoryColors";

export interface Exercises {
    id: number;
    name: string;
    icon: string;
    category: string;
    color: string;
}

export interface ExercisesType {
    id: number;
    name: string;
}
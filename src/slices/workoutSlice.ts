import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { ExerciseObject } from "../types/PropsType";


interface Workout {
    id: number;
    date: Date;
    sets: ExerciseObject;
}

interface WorkoutState {
    workouts: Workout[]; // Use an array to store multiple workouts
}

const initialState: WorkoutState = {
    workouts: [],
};

export const workoutSlice = createSlice({
    name: "workout",
    initialState,
    reducers: {
        addWorkout: (state, action) => {
            state.workouts.push(action.payload); // Push the new workout to the workouts array
        },
    },
});

export const { addWorkout } = workoutSlice.actions;
export const selectWorkouts = (state: RootState): Workout[] => state.workout.workouts;

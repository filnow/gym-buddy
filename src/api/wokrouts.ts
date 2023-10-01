
import {
    DocumentData,
    Timestamp,
    addDoc,
    deleteDoc,
    doc,
    getDocs,
    orderBy,
    query,
    updateDoc,
    where,
  } from "firebase/firestore";
import { workoutCollection } from "../firebase.ts";
import { useAuthGuard } from "../hooks/authHook.ts";
import { ExerciseObject } from "../types/PropsType.ts";
import { FirebaseError } from "firebase/app";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Workout } from "../types/WorkoutType.ts";


export function fetchWorkouts(userId: string) {
    useAuthGuard();
    return useQuery<Workout[], FirebaseError>({
        queryKey: ['workoutsData', userId],
        queryFn: async () => {
            const response = await getDocs(
                query(
                    workoutCollection,
                    where("owner", "==", userId),
                    orderBy("date", "desc")
                )
            );
            const workouts: Workout[] = response.docs.map((doc) => {
                const data = doc.data();
                return {
                    owner: userId,
                    date: data.date,
                    exercises: data.exercises,
                };
            });
            return workouts;
        },
    });
}

export function useAddWorkout() {
    useAuthGuard();
    return useMutation<string, FirebaseError, Workout>({
      mutationFn: async (workoutObject: Workout) => {
          const response = await addDoc(workoutCollection, {
            ...workoutObject
          });
          
          return response.id
      },
    });
  }
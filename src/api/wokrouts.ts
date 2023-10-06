import {
    addDoc,    
    getDocs,
    orderBy,
    query,
    where,
  } from "firebase/firestore";
import { workoutCollection } from "../firebase.ts";
import { useAuthGuard } from "../hooks/authHook.ts";
import { FirebaseError } from "firebase/app";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Workout } from "../types/WorkoutType.ts";


export function fetchWorkouts(userId: string) {
    useAuthGuard();
    return useQuery<Workout[], FirebaseError>({
        queryKey: ['workoutsData', userId],
        queryFn: async () => {
            try {
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
            } catch (error) {
                console.log(error); //NOTE: maybe add some error handling here
                const workouts: Workout[] = [];
                return workouts;
            }
        }
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
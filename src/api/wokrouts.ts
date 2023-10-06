import {
    addDoc,    
    deleteDoc,    
    doc,    
    getDocs,
    orderBy,
    query,
    where,
  } from "firebase/firestore";
import { db, workoutCollection } from "../firebase.ts";
import { useAuthGuard } from "../hooks/authHook.ts";
import { FirebaseError } from "firebase/app";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
                    id: doc.id,
                    owner: userId,
                    date: data.date,
                    exercises: data.exercises,
                };
            });
            return workouts;
        }
    });
}

export function useAddWorkout() {
    useAuthGuard();
    return useMutation<string, FirebaseError, Partial<Workout>>({
      mutationFn: async (workoutObject: Partial<Workout>) => {
          const response = await addDoc(workoutCollection, {
            ...workoutObject
          });
          
          return response.id
      },
    });
  }

export function useRemoveWorkout() {
    const queryClient = useQueryClient();
    useAuthGuard();
    return useMutation<void, FirebaseError, string>({
        mutationFn: async (workoutId: string) => {
            await deleteDoc(doc(db, 'workouts', workoutId));
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['workoutsData']);
        }
    }); 
}
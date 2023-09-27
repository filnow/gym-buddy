import { useMutation } from "@tanstack/react-query";
import {
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { FirebaseError } from "firebase/app";

interface FirebaseUserData {
    email: string;
    password: string;
  }

export function useSignIn() {
    return useMutation<User, FirebaseError, FirebaseUserData>({
        mutationFn: async (user: FirebaseUserData) => {
        const responseSignIn = await signInWithEmailAndPassword(
            auth,
            user.email,
            user.password
        );
        return responseSignIn.user;
        },
    });
}

export function useSignUp() {
    return useMutation<User, FirebaseError, FirebaseUserData>({
      mutationFn: async (newUser: FirebaseUserData) => {
        const responseSignUp = await createUserWithEmailAndPassword(
          auth,
          newUser.email,
          newUser.password
        );
        return responseSignUp.user;
      },
    });
  }
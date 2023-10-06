import { Workout } from "./WorkoutType";

export interface SideMenuProps {
    exerciseObject: {};
    setExerciseObject: (data: {}) => void;
    setFilterData: (data: Array<boolean>) => void;
  };

export interface ExerciseObject {
    [key: string]: {};
  }

export interface SearchBarProps {
    sendData: (data: string) => void;
  }

export interface ExerciseInputProps {
    exerciseName: string;
    setModalState: () => void;
    setExerciseObject: (data: {}) => void;
}

export interface ExerciseCardProps {
  updateData: Array<boolean>;
  searchData: string;
  exerciseObject: {};
  sendExerciseObject: (data: {}) => void; 
}

export interface WorkoutsMenuProps {
  data?: Workout[];
}
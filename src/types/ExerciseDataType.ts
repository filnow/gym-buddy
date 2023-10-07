import { ExerciseField } from '../enum/ExerciseField';

export type ExerciseDataState = {
    [ExerciseField.NumSeries]: string;
    [ExerciseField.NumReps]: string;
    [ExerciseField.Weight]: string;
    [ExerciseField.Comments]: string;
  };
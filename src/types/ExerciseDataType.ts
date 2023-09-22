import { ExerciseField } from '../enum/ExerciseField';

export type ExerciseDataState = {
    [ExerciseField.NumSeries]: number;
    [ExerciseField.NumReps]: number;
    [ExerciseField.Weight]: number;
    [ExerciseField.Comments]: string;
  };
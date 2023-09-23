import { ExerciseDataState } from '../types/ExerciseDataType';
import { ExerciseField } from '../enum/ExerciseField';

export const defaultExerciseData: ExerciseDataState = {
    [ExerciseField.NumSeries]: 0,
    [ExerciseField.NumReps]: 0,
    [ExerciseField.Weight]: 0,
    [ExerciseField.Comments]: '',
  };
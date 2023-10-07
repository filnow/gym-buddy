import { ExerciseDataState } from '../types/ExerciseDataType';
import { ExerciseField } from '../enum/ExerciseField';

export const defaultExerciseData: ExerciseDataState = {
    [ExerciseField.NumSeries]: '',
    [ExerciseField.NumReps]: '',
    [ExerciseField.Weight]: '',
    [ExerciseField.Comments]: '',
  };
import { ExerciseField } from '../enum/ExerciseField';

export const inputFields = [
    {
        label: 'Number of Series',
        type: 'number',
        field: ExerciseField.NumSeries,
    },
    {
        label: 'Number of Reps',
        type: 'number',
        field: ExerciseField.NumReps,
    },
    {
        label: 'Weight',
        type: 'number',
        field: ExerciseField.Weight,
    },
    {
        label: 'Comments',
        multiline: true,
        field: ExerciseField.Comments,
    },
];

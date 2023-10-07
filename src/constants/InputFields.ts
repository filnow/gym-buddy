import { ExerciseField } from '../enum/ExerciseField';

export const inputFields = [
    {
        label: 'Number of Series',
        type: 'string',
        field: ExerciseField.NumSeries,
    },
    {
        label: 'Number of Reps',
        type: 'string',
        field: ExerciseField.NumReps,
    },
    {
        label: 'Weight',
        type: 'string',
        field: ExerciseField.Weight,
    },
    {
        label: 'Comments',
        multiline: true,
        field: ExerciseField.Comments,
    },
];

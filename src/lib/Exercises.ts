import { iconImages} from "./iconImages";
import { exerciseArms } from "./category/Arms";
import { exerciseLegs } from "./category/Legs";
import { exerciseAbs } from "./category/Abs";
import type { Exercises, ExercisesType } from "../types/ExerciseType";
import { colors } from "./CategoryColors";


const mapExerciseData = (categoryData: ExercisesType[], 
                        category: string, 
                        icon: string, 
                        color: string): Exercises[] => {
    return categoryData.map((item) => ({
        id: item.id,
        name: item.name,
        icon,
        category,
        color,
    }));
};

export const exerciseData: Exercises[] = [
    ...mapExerciseData(exerciseArms, 'Arms', iconImages.iconArms, colors.red),
    ...mapExerciseData(exerciseLegs, 'Legs', iconImages.iconLegs, colors.orange),
    ...mapExerciseData(exerciseAbs, 'Abs', iconImages.iconAbs, colors.blue),
];






import { iconImages} from "./iconImages";
import { exerciseArms } from "./category/Arms";
import { exerciseLegs } from "./category/Legs";
import { exerciseAbs } from "./category/Abs";
import { exerciseChest } from "./category/Chest";
import { exerciseBack } from "./category/Back";
import { exerciseShoulders } from "./category/Shoulders";
import { exerciseCardio } from "./category/Cardio";
import { exerciseStreching } from "./category/Streching";
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
    ...mapExerciseData(exerciseChest, 'Chest', iconImages.iconChest, colors.purple),
    ...mapExerciseData(exerciseBack, 'Back', iconImages.iconBack, colors.green),
    ...mapExerciseData(exerciseShoulders, 'Shoulders', iconImages.iconShoulders, colors.yellow),
    ...mapExerciseData(exerciseCardio, 'Cardio', iconImages.iconCardio, colors.pink),
    ...mapExerciseData(exerciseStreching, 'Streching', iconImages.iconStreching, colors.teal),
];






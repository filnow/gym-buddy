import { iconImages} from "./iconImages";
import { exerciseArms } from "./category/Arms";
import { exerciseLegs } from "./category/Legs";
import { exerciseAbs } from "./category/Abs";
import type { Exercises } from "../types/ExerciseType";

const mapExerciseData = (categoryData: typeof exerciseAbs, category: string, icon: string): Exercises[] => {
    return categoryData.map((item) => ({
        id: item.id,
        name: item.name,
        icon,
        category,
    }));
};

const exerciseData: Exercises[] = [
    ...mapExerciseData(exerciseArms, 'Arms', iconImages.iconArms),
    ...mapExerciseData(exerciseLegs, 'Legs', iconImages.iconLegs),
    ...mapExerciseData(exerciseAbs, 'Abs', iconImages.iconAbs),
];

export { exerciseData };




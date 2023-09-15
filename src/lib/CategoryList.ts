import { iconImages } from "./IconImages";
import { colors } from "./CategoryColors";
import { exerciseArms } from "./category/Arms";
import { exerciseLegs } from "./category/Legs";
import { exerciseAbs } from "./category/Abs";
import { exerciseChest } from "./category/Chest";
import { exerciseBack } from "./category/Back";
import { exerciseShoulders } from "./category/Shoulders";
import { exerciseCardio } from "./category/Cardio";
import { exerciseStreching } from "./category/Streching";
  

export const categories = [
    { data: exerciseArms, name: 'Arms', icon: iconImages.iconArms, color: colors.red },
    { data: exerciseLegs, name: 'Legs', icon: iconImages.iconLegs, color: colors.orange },
    { data: exerciseAbs, name: 'Abs', icon: iconImages.iconAbs, color: colors.blue },
    { data: exerciseChest, name: 'Chest', icon: iconImages.iconChest, color: colors.purple },
    { data: exerciseBack, name: 'Back', icon: iconImages.iconBack, color: colors.green },
    { data: exerciseShoulders, name: 'Shoulders', icon: iconImages.iconShoulders, color: colors.yellow },
    { data: exerciseCardio, name: 'Cardio', icon: iconImages.iconCardio, color: colors.pink },
    { data: exerciseStreching, name: 'Streching', icon: iconImages.iconStreching, color: colors.teal },
  ];
  
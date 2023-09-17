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
    { data: exerciseArms, name: 'Arms', icon: iconImages.iconArms, colorLight: colors.red.light, colorDark: colors.red.dark },
    { data: exerciseLegs, name: 'Legs', icon: iconImages.iconLegs, colorLight: colors.orange.light, colorDark: colors.orange.dark },
    { data: exerciseAbs, name: 'Abs', icon: iconImages.iconAbs, colorLight: colors.blue.light, colorDark: colors.blue.dark},
    { data: exerciseChest, name: 'Chest', icon: iconImages.iconChest, colorLight: colors.purple.light, colorDark: colors.purple.dark},
    { data: exerciseBack, name: 'Back', icon: iconImages.iconBack, colorLight: colors.green.light, colorDark: colors.green.dark},
    { data: exerciseShoulders, name: 'Shoulders', icon: iconImages.iconShoulders, colorLight: colors.indigo.light, colorDark: colors.indigo.dark},
    { data: exerciseCardio, name: 'Cardio', icon: iconImages.iconCardio, colorLight: colors.pink.light, colorDark: colors.pink.dark},
    { data: exerciseStreching, name: 'Streching', icon: iconImages.iconStreching, colorLight: colors.teal.light, colorDark: colors.teal.dark},
  ];
  
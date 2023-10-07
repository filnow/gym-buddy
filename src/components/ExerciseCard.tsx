import IconButton from '@mui/material/IconButton';
import { PlusIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import type { Exercises, ExercisesType } from "../types/ExerciseType";
import { categories } from '../constants/CategoryList';
import { defaultExerciseData } from '../constants/DeafaultParams';
import { ExerciseCardProps } from '../types/PropsType';


const mapExerciseData = (
  categoryData: ExercisesType[], 
  category: string, 
  icon: string, 
  colorLight: string,
  colorDark: string): Exercises[] => {
    
  return categoryData.map((item) => ({
    id: item.id,
    name: item.name,
    icon,
    category,
    colorLight,
    colorDark
  }));
};

export default function ExerciseCard(
  {
    updateData,
    searchData,
    exerciseObject,
    sendExerciseObject

  }: ExerciseCardProps) {

  const names = categories.flatMap(category => category.data.map(item => item.name))

  const filteredData = searchData === ''
  ? names
  : names.filter(el => el.toLowerCase().includes(searchData));

  const mapAndFilterExerciseData = (data: typeof categories) => data
    .flatMap(category =>
      mapExerciseData(category.data, 
                      category.name, 
                      category.icon, 
                      category.colorLight, 
                      category.colorDark)
    )
    .filter(exercise => filteredData.includes(exercise.name))
    .flatMap(exercise =>
      mapExerciseData([exercise], 
                      exercise.category, 
                      exercise.icon, 
                      exercise.colorLight, 
                      exercise.colorDark)
    );

  const exerciseData: Exercises[] = updateData.every(value => value === false)
    ? mapAndFilterExerciseData(categories)
    : mapAndFilterExerciseData(categories.filter((_category, index) => updateData[index]));
  
  function buttonClick(id: number) {
    const exercise = categories.flatMap(category => category.data).find(exercise => exercise.id === id)?.name;
    
    if (exercise && !Object.keys(exerciseObject).includes(exercise)) {
      sendExerciseObject((prevExerciseList: {}) => ({
        ...prevExerciseList,
        [exercise]: defaultExerciseData,
      }));
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7 ml-5 mt-10 mb-10">
      {exerciseData.map((exercise) => {
        return (
        <div className="link-card">
          <div className={`w-full flex items-center justify-between p-7 rounded-lg shadow-md border-4 ${exercise.colorLight} bg-white transition-border duration-300 ${exercise.colorDark}`}>
              <div className="text-xl font-semibold text-black">
                {exercise.name}
              </div>
              <div className="flex items-center"> 
                <img src={exercise.icon} className="w-6 h-6 ml-5" />
                <div className="ml-16 flex flex-col items-center">
                  <IconButton aria-label="Example" onClick={() => buttonClick(exercise.id)}>
                      <PlusIcon className="w-6 h-6" />
                  </IconButton>
                  <IconButton aria-label="Example">
                      <EllipsisHorizontalIcon className="w-6 h-6" />
                  </IconButton>
                </div>
              </div>
          </div>
        </div>
      );})} 
    </div>
  );
}
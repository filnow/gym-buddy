
import IconButton from '@mui/material/IconButton';
import { PlusIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import './Card.css'
import type { Exercises, ExercisesType } from "../types/ExerciseType";
import { categories } from '../lib/CategoryList';


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

export default function ExerciseCard() {

  const exerciseData: Exercises[] = categories.flatMap(category =>
    mapExerciseData(category.data, category.name, category.icon, category.color)
  );

  return (
    <>
    {exerciseData.map((exercise) => {
      return (
      <div className="link-card">
        <div className="my-container">
            <div className="text-xl font-semibold text-black">
              {exercise.name}
            </div>
            <div className="flex items-center"> 
              <img src={exercise.icon} className="w-6 h-6 ml-5" />
              <div className="ml-16 flex flex-col items-center">
                <IconButton aria-label="Example">
                    <PlusIcon className="w-6 h-6" />
                </IconButton>
                <IconButton aria-label="Example">
                    <EllipsisHorizontalIcon className="w-6 h-6" />
                </IconButton>
              </div>
            </div>
        </div>
      </div>
      );
      })} 
    </>
  );
}
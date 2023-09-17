
import IconButton from '@mui/material/IconButton';
import { PlusIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import './Card.css'
import type { Exercises, ExercisesType } from "../types/ExerciseType";
import { categories } from '../constants/CategoryList';
import { useState } from 'react';


const mapExerciseData = (
  categoryData: ExercisesType[], 
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

export default function ExerciseCard(
  {
    updateData,
    searchData,
    sendIdData

  }: {
    updateData: Array<boolean>,
    searchData: string,
    sendIdData?: any
  }
) {
  const [_id, setId] = useState<number>(0);

  const names = categories.flatMap(category => category.data.map(item => item.name))

  const filteredData = searchData === ''
  ? names
  : names.filter(el => el.toLowerCase().includes(searchData));

  const mapAndFilterExerciseData = (data: typeof categories) => data
    .flatMap(category =>
      mapExerciseData(category.data, category.name, category.icon, category.color)
    )
    .filter(exercise => filteredData.includes(exercise.name))
    .flatMap(exercise =>
      mapExerciseData([exercise], exercise.category, exercise.icon, exercise.color)
    );

  const exerciseData: Exercises[] = updateData.every(value => value === false)
    ? mapAndFilterExerciseData(categories)
    : mapAndFilterExerciseData(categories.filter((_category, index) => updateData[index]));

  function buttonClick(id: number) {
    setId(id);
    sendIdData(id);
  }


  return (
    <>
    {exerciseData.map((exercise) => {
      return (
      <div className="link-card">
        <div className={`w-full flex items-center justify-between p-7 rounded-lg shadow-md border-4 ${exercise.color} bg-white transition-border duration-300 hover:border-blue-600`}>
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
    </>
  );
}
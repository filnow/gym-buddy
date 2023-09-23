import SideMenu from "../components/SideMenu.tsx";
import ExerciseCard from '../components/ExerciseCard.tsx';
import SearchBar from '../components/SearchBar.tsx';
import { useState } from "react";
import CategoryFilter from "../components/CategoryFilter.tsx";


const CardsMenu = () => {

    const [data, setData] = useState(Array<boolean>(0));

    const[searchData, setSearchData] = useState<string>("");

    const [exerciseList, setExerciseList] = useState({});

    const sendExerciseList = (data : {}) => {
        setExerciseList(data);
    }
   
    const sentData = (data : Array<boolean>) => {
        setData(data);
    }

    const sentSearchData = (data : string) => {
        setSearchData(data);
    }

    return (
        <div className="relative h-screen p-2 gap-3 flex items-stretch">
            <div className="w-[350px] flex-col hidden lg:flex overflow-y-auto">
                <SideMenu exerciseList={exerciseList} setExerciseList={sendExerciseList}/>  
            </div> 
            <div className="rounded-lg bg-slate-300 flex-1 mx-auto overflow-y-auto scrollbar-hide">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-full sm:w-1/2 lg:w-1/2 mt-10 ml-4 justify-center">
                        <SearchBar sendData={sentSearchData}/>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7 ml-5 mt-10 mb-10">
                        <ExerciseCard updateData={data} searchData={searchData} exerciseList={exerciseList} sendExerciseList={sendExerciseList}/>
                    </div>
                </div>
            </div>
            <div className="w-[350px] flex-col hidden lg:flex overflow-y-auto">
                <CategoryFilter sendData={sentData} />
            </div>
        </div>
    );
}

export default CardsMenu;
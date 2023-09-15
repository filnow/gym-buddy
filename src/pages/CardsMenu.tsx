import SideMenu from "../components/SideMenu.tsx";
import ExerciseCard from '../components/ExerciseCard.tsx';
import SearchBar from '../components/SearchBar.tsx';
import CategoryFilter from "../components/CategoryFilter.tsx";


const CardsMenu = () => {

    return (
        <div className="relative h-screen p-2 gap-3 flex items-stretch">
            <div className="w-[350px] flex-col hidden lg:flex overflow-y-auto">
                <SideMenu />  
            </div>
            <div className="rounded-lg bg-zinc-900 flex-1 mx-auto overflow-y-auto scrollbar-hide">
                <div className="flex flex-col items-center justify-center">
                <div className="w-full sm:w-1/2 lg:w-1/2 mt-10 ml-4">
                    <div className="w-90 justify-center mx-auto">
                    <SearchBar/>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7 ml-5 mt-10 mb-10">
                <ExerciseCard />
                </div>
                </div>
            </div>
            <div className="w-[350px] flex-col hidden lg:flex overflow-y-auto">
                <CategoryFilter />
            </div>
        </div>
    );
}

export default CardsMenu;
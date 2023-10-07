import ExerciseMenu from "../components/ExerciseMenu.tsx";
import ExerciseCard from '../components/ExerciseCard.tsx';
import SearchBar from '../components/SearchBar.tsx';
import { useState } from "react";
import NavbarLayout from "../components/templates/NavbarLayout.tsx";
import Navbar from "../components/Navbar.tsx";
import MainLayout from "../components/templates/MainLayout.tsx";
import MenuLayout from "../components/templates/MenuLayout.tsx";

const CardsMenu = () => {

    const [filterData, setFilterData] = useState(Array<boolean>(0));
    const[searchData, setSearchData] = useState<string>("");
    const [exerciseObject, setExerciseObject] = useState({});

    const sendExerciseObject = (data : {}) => {
        setExerciseObject(data);
    }

    const sentFilterData = (data : Array<boolean>) => {
        setFilterData(data);
    }

    const sentSearchData = (data : string) => {
        setSearchData(data);
    }

    return (
        <MainLayout>
            <NavbarLayout>
                <Navbar homeNav={true}/>
                <ExerciseMenu exerciseObject={exerciseObject} 
                        setExerciseObject={sendExerciseObject} 
                        setFilterData={sentFilterData}/>
            </NavbarLayout>
            <MenuLayout>
                <SearchBar sendData={sentSearchData}/>
                <ExerciseCard updateData={filterData} 
                                searchData={searchData} 
                                exerciseObject={exerciseObject} 
                                sendExerciseObject={sendExerciseObject}/>
            </MenuLayout>
        </MainLayout>
    );
}

export default CardsMenu;

import { useAppSelector } from '../store/store';
import { selectUserUid } from '../slices/authSlice';
import WorkoutsMenu from "../components/WorkoutsMenu.tsx";
import { fetchWorkouts } from "../api/wokrouts.ts";
import Navbar from "../components/Navbar.tsx";
import MainLayout from '../components/templates/MainLayout.tsx';
import NavbarLayout from '../components/templates/NavbarLayout.tsx';
import MenuLayout from '../components/templates/MenuLayout.tsx';

export default function Home() {

    const userUid = useAppSelector(selectUserUid);
    const {data}  = fetchWorkouts(userUid);

    return (
        <MainLayout>
            <NavbarLayout>
                <Navbar homeNav={false}/>
            </NavbarLayout>
            <MenuLayout>
                <WorkoutsMenu data={data}/>
            </MenuLayout>
        </MainLayout>
    );
};
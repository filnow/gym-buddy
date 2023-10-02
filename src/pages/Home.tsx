import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useSignOut } from '../api/auth';
import { useAppDispatch, useAppSelector } from '../store/store';
import { logout, selectUserUid } from '../slices/authSlice';
import Animation from "../components/Animation.tsx";
import WorkoutsMenu from "../components/WorkoutsMenu.tsx";
import { fetchWorkouts } from "../api/wokrouts.ts";


export default function Home() {

    const userUid = useAppSelector(selectUserUid);
    const signOutMutation = useSignOut();
    const { data } = fetchWorkouts(userUid);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const handleSearch = () => navigate("/search");

    const handleSignOut = () => {
        signOutMutation.mutate(undefined, {
            onSuccess: () => {
                dispatch(logout());
            },
            onError: (error) => {
                console.log(error);
            },
        });
    };

    return (
        <div className="relative h-screen p-2 gap-3 flex items-stretch">
            <div className="w-[350px] flex-col hidden lg:flex overflow-y-auto">
                <div className="flex flex-col flex-1 gap-2">
                    <div className="bg-slate-300 rounded-lg">
                        <IconButton onClick={handleSearch}>
                            <SearchIcon className="w-24 h-24 ml-2" />
                        </IconButton>
                        <IconButton onClick={handleSignOut}>
                            <LogoutIcon className="w-24 h-24 ml-2" />
                        </IconButton>
                    </div>
                </div>
            </div> 
            <div className="rounded-lg bg-slate-300 flex-1 mx-auto overflow-y-auto scrollbar-hide">
                <div className="flex flex-col items-center justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7 ml-5 mt-10 mb-10">
                        <WorkoutsMenu data={data}/>
                    </div>
                </div>
            </div>
            <div className="w-[350px] flex-col hidden lg:flex overflow-y-auto">
                <Animation/>
            </div>
        </div>
    );
};
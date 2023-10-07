import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import { useAppDispatch } from "../store/store";
import { useSignOut } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { logout } from '../slices/authSlice';


interface NavbarProps {
    homeNav: boolean;
}

export default function Navbar({ homeNav }: NavbarProps) {

    const signOutMutation = useSignOut();
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
        <div className="bg-slate-300 rounded-lg">
            {homeNav ?  
                <IconButton onClick={() => navigate('/')}>
                    <HomeIcon className="w-24 h-24 ml-2" />
                </IconButton>
                    : 
                <IconButton onClick={handleSearch}>
                    <SearchIcon className="w-24 h-24 ml-2" />
                </IconButton>
            }
            <IconButton onClick={handleSignOut}>
                <LogoutIcon className="w-24 h-24 ml-2" />
            </IconButton>
        </div>
    );
}
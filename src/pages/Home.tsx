import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useSignOut } from '../api/auth';
import { useAppDispatch } from '../store/store';
import { logout } from '../slices/authSlice';


export default function Home() {

    const dispatch = useAppDispatch();
    const signOutMutation = useSignOut();
    const navigate = useNavigate();

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

    const handleSearch = () => navigate("/search");

    return (
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
    );
};
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/Routes';
import { SplashScreenProps } from '../types/PropsType';
import gifURL from '../assets/splash.gif';


export default function SplashScreen({setSplash}: SplashScreenProps) {
    
    const navigate = useNavigate();

    setTimeout(() => {
        navigate(ROUTES.HOME);
        setSplash(false);
    }
    , 4500);

    return (
        <div>
            <img
                src={gifURL}
            />
        </div>
    );
}
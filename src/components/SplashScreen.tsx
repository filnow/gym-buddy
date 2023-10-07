import { useNavigate } from 'react-router-dom';
import { splashGif } from '../constants/GifsList';
import { ROUTES } from '../constants/Routes';
import { SplashScreenProps } from '../types/PropsType';


export default function SplashScreen({setSplash}: SplashScreenProps) {
    
    const navigate = useNavigate();

    let timerId: NodeJS.Timeout;
    timerId = setTimeout(() => {
        navigate(ROUTES.HOME);
        setSplash(false);
    }
    , 4500);

    return (
        <div>
            <img
                src={splashGif}
            />
        </div>
    );
}
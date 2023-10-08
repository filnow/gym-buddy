import LiftingGirlGif from '../assets/gifs/LiftingGirl.gif';
import LiftingManGif from '../assets/gifs/LiftingMan.gif';
import RunningGirlGif from '../assets/gifs/RunningGirl.gif';
import RunningManGif from '../assets/gifs/RunningMan.gif';
import StrechingGirlGif from '../assets/gifs/StrechingGirl.gif';

type GifsList = {
    [key: string]: string;
  };



export const gifsList: GifsList = {
    liftingGirl : LiftingGirlGif,
    liftingMan : LiftingManGif,
    runningGirl : RunningGirlGif,
    runningMan : RunningManGif,
    strechingGirl : StrechingGirlGif,
}

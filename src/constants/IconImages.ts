import iconLegsImage from '../assets/images/iconLegs.png';
import iconArmsImage from '../assets/images/iconArms.png';
import iconAbsImage from '../assets/images/iconAbs.png';
import iconChestImage from '../assets/images/iconChest.png';
import iconBackImage from '../assets/images/iconBack.png';
import iconShouldersImage from '../assets/images/iconShoulders.png';
import iconCardioImage from '../assets/images/iconCardio.png';
import iconStrechingImage from '../assets/images/iconStreching.png';


type IconList = {
    [key: string]: string;
  };

export const iconImages: IconList = {
    iconLegs : iconLegsImage,
    iconArms : iconArmsImage,
    iconAbs : iconAbsImage,
    iconChest : iconChestImage,
    iconBack : iconBackImage,
    iconShoulders : iconShouldersImage,
    iconCardio : iconCardioImage,
    iconStreching : iconStrechingImage,
}

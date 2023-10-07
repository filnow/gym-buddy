import '../utils/GifsAnimation.css'
import { gifsList } from '../constants/GifsList'; 


export default function Animation() {
 
  return (
    <div className="w-[350px] flex-col hidden lg:flex overflow-y-auto">
      <div className="image-container scrollbar">
        {Object.keys(gifsList).map((gifKey, index) => (
          <img
            key={index}
            src={gifsList[gifKey]}
            alt={gifKey}            
          />
        ))}
      </div>
    </div>
  );
};



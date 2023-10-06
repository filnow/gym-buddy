import '../utils/GifsAnimation.css'
import { gifsList } from '../constants/GifsList'; 


export default function Animation() {
 
  return (
    <div className="App">
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



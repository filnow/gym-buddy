import './GifsAnimation.css';
import { gifsList } from '../constants/GifsList'; 


const CategoryFilter = () => {
 

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

export default CategoryFilter;

import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { Image } from "../interfaces/image.interface";

function ImageCard({image}: any) {
  const [isFavorite, setIsFavorite] = useState(localStorage.getItem("favorites")?.includes(image.id));
  
  const addToFavorite = (id:number) =>{
    if (localStorage.favorites) {
      let storedPics = JSON.parse(localStorage.favorites);
      storedPics.push(id)
      localStorage.setItem("favorites", JSON.stringify(storedPics))
      setIsFavorite(true)
    }
    else {
      localStorage.setItem("favorites", JSON.stringify([id]))
    }
  }


  return (
    <div className="image-card"  >
      <div className="image-container">
      <img src={image.url} alt={image.title}/>
      { isFavorite ? <div className="favorite-icon"> ❤️ </div> : <div></div>}
      </div>
     
     <div className="image-box">
      <p className="image-title">{image.title}</p>
      <button className="image-favorite" onClick={()=>addToFavorite(image.id)}>Favorite</button>
      
     </div>
    </div>
  );
}

export default ImageCard;

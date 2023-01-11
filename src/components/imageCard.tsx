import { useEffect, useState } from "react";
import { Image } from "../interfaces/image.interface";

function ImageCard({image}: any ) {
  const [favorites, setFavorites] = useState([]);
  const addToFavorite = (id:number) =>{
    console.log("add to favorites")
    if (localStorage.favorites) {
      let storedPics = JSON.parse(localStorage.favorites);
      storedPics.push(id)
      localStorage.setItem("favorites", JSON.stringify(storedPics))
    }
    else {
      localStorage.setItem("favorites", JSON.stringify([id]))
    }
  }

  const removeFromFavorite = (id:number) =>{
    if (localStorage.favorites) {
      let storedPics = JSON.parse(localStorage.favorites);
      storedPics.filter((e: number)=> e===id)
      localStorage.setItem("favorites", JSON.stringify(storedPics))
    }
  }

  const isFavorite = (id:number) =>{
    if (localStorage.favorites) {
      return JSON.parse(localStorage.favorites).includes(id);
    }
    return false
  }


  return (
    <div className="image-card"  >
      <div className="image-container">
      <img src={image.url} alt={image.title}/>
      { isFavorite(image.id) ? <div className="favorite-icon">Favorite</div> : <div></div>}
      </div>
     
     <div className="image-box">
      <p className="image-title">{image.title}</p>
      <button className="image-favorite" onClick={()=>addToFavorite(image.id)}>Favorite</button>
      
     </div>
    </div>
  );
}

export default ImageCard;

import { useEffect } from "react";

function ImageCard({image} : any) {
  const handlefavorite = (id:number) =>{
    console.log("favorite")
    if (localStorage.favorites) {
      let storedPics = JSON.parse(localStorage.favorites);
      storedPics.push(id)
      localStorage.setItem("favorites", JSON.stringify(storedPics))
    }
    else {
      localStorage.setItem("favorites", JSON.stringify([id]))
    }
  }

  return (
    <div className="image-card" onClick={()=>handlefavorite(image.id)} >
     <img src={image.url} alt={image.title}/>
    </div>
  );
}

export default ImageCard;

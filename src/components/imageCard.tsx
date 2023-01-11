import { useEffect } from "react";

function ImageCard({image} : any) {
  useEffect(()=>{
    
  },[])

  return (
    <div className="image-card" >
     <img src={image.url} alt={image.title}/>
    </div>
  );
}

export default ImageCard;

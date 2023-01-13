import { useState } from "react";
import { Image } from "../interfaces/image.interface";


function useLocalStorage(image: Image) {
    const [isFavorites, setIsFavorite] = useState<boolean>(localStorage.getItem("favorites")?.includes(image.id) || false);
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
    return [isFavorites, addToFavorite]
}

export default useLocalStorage;

import { Data } from "../interfaces/data.interface"
import { PhotoData } from "../interfaces/photo_data.interface"


const format = (img: PhotoData)=>{
   return {
    id: img["id"],
    title: img["title"],
    url: `${process.env.REACT_APP_FLICKR_API_IMAGE_URL}/${img["server"]}/${img["id"]}_${img["secret"]}_m.jpg`,
    favorite: localStorage.getItem("favorites")?.includes(img["id"])
   }
}

export const flickrSearch = (page : number, query: string)=>{
    const apiUrl= `${process.env.REACT_APP_FLICKR_API}&api_key=${process.env.REACT_APP_FLICKR_API_KEY}&text=${query}&min_taken_date=1356973200&max_taken_date=1356991200&radius=20&format=json&per_page=15&page=${page}&nojsoncallback=true`
    return fetch(apiUrl)
    .then((res)=>res.json())
    .then((data: Data)=>{
       return data.photos.photo.map((e: PhotoData)=>{
        return format(e)
       })
    })
    .catch((err) =>{return err;})
}
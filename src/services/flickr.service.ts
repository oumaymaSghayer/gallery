import axios from "axios"
import fetchJsonp from "fetch-jsonp"

import { Image } from "../interfaces/image.interface"

const key ="58acf7c567c26a17bc8184123e88cddf"
const secret ="1ec3e44b973829cb"
const URL ="1ec3e44b973829cb"


const format = (img: any)=>{
    return {
        id: img["id"],
    }
}


export const flickrSearch = ()=>{
    let query = "kittens"
    const apiUrl= `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=58acf7c567c26a17bc8184123e88cddf&min_taken_date=1356973200&max_taken_date=1356991200&lat=29.9537&lon=-90.0777&radius=5&format=json&per_page=2&nojsoncallback=true`
    fetch(apiUrl)
    .then((res)=>res.json())
    .then((data: any)=>{
       console.log(data)
    })
    .catch((err) =>console.log(err))
}
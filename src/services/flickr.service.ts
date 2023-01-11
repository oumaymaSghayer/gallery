
const key ="58acf7c567c26a17bc8184123e88cddf"
const secret ="1ec3e44b973829cb"
const URL ="1ec3e44b973829cb"

const format = (img: any)=>{
   return {
    id: img["id"],
    title: img["title"],
    url: `https://live.staticflickr.com/${img["server"]}/${img["id"]}_${img["secret"]}_w.jpg`
   }
}

export const flickrSearch = (page : number)=>{
    const apiUrl= `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&min_taken_date=1356973200&max_taken_date=1356991200&lat=29.9537&lon=-90.0777&radius=5&format=json&per_page=5&page=${page}&nojsoncallback=true`
    return fetch(apiUrl)
    .then((res)=>res.json())
    .then((data: any)=>{
       return data.photos.photo.map((e: any)=>{
        return format(e)
       })
    })
    .catch((err) =>{return err;})
}
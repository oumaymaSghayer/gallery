import { useEffect, useState } from "react";
import { Image } from "../interfaces/image.interface";
import { flickrSearch } from "../services/flickr.service";

function useImageLoad(pageNum: number) {
    const [imageList, setImageList] = useState<Image[]>([]);
    const [hasMore, setHasMore] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=>{
        console.log("fired")
        setLoading(true)
        setError(false)
        flickrSearch(pageNum).then((res)=>{
            setImageList((prev:Image[])=>{
                return prev.concat(res)
            })
            setLoading(false)
            setHasMore(res.length >0 )
        })
        .catch(err=> setError(true) )
      },[pageNum])

  return {
    loading, error, imageList, hasMore
  }
}

export default useImageLoad;

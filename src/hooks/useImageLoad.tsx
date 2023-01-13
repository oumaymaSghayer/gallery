import { useEffect, useState } from "react";
import { Image } from "../interfaces/image.interface";
import { flickrSearch } from "../services/flickr.service";

function useImageLoad(pageNum: number, query: string) {
    const [imageList, setImageList] = useState<Image[]>([]);
    const [hasMore, setHasMore] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    
    useEffect(() => {
      setImageList([])
    }, [query])

    useEffect(()=>{
        setLoading(true)
        setError(false)
        flickrSearch(pageNum, query).then((res)=>{
            setImageList((prev:Image[])=>{
                return prev.concat(res)
            })
            setLoading(false)
            setHasMore(res.length >0 )
        })
        .catch(err=> setError(true) )
      },[pageNum, query])

  return {
    loading, error, imageList, hasMore
  }
}

export default useImageLoad;

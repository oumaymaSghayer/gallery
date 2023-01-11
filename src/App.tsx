import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { flickrSearch } from './services/flickr.service';
import ImageList from './components/imageList';
import useImageLoad from './hooks/useImageLoad';
import useInViewPort from './hooks/useInViewPort';
import { Image } from './interfaces/image.interface';
import ImageCard from './components/imageCard';

function App() {
  const [pageNum, setPageNum] = useState(1);
  const { loading, error, imageList, hasMore}=useImageLoad(pageNum)
  console.log("imageList", imageList)
  const { isInViewport, ref } = useInViewPort();
  useMemo(()=>{ setPageNum((prev) => prev + 1)}, [isInViewport])
  return (
    <>
     
     {
        imageList.map((e:Image,index:number)=>{
          if (imageList.length === index+1)
            return <div ref={ref} key={index}><ImageCard image={e} /></div>;
          return <div key={index}><ImageCard image={e} /></div>;

        })
     }
     <div>{loading && "loading..."}</div>
     <div>{error && "Error"}</div>
    </>
  );
}

export default App;

import { useState, useMemo } from 'react';
import useImageLoad from './hooks/useImageLoad';
import useInViewPort from './hooks/useInViewPort';
import { Image } from './interfaces/image.interface';
import ImageCard from './components/imageCard';
import "./App.css";

function App() {
  const [pageNum, setPageNum] = useState(1);
  const { loading, error, imageList, hasMore}=useImageLoad(pageNum)
  const { isInViewport, ref } = useInViewPort(hasMore);
  useMemo(()=>{ setPageNum((prev) => prev + 1); }, [isInViewport])
  return (
    <div className='App'>
     {
        imageList.map((e: Image,index:number)=>{
          if (imageList.length === index+1)
            return <div ref={ref} key={index}><ImageCard image={e} /></div>;
          return <div key={index}><ImageCard image={e} /></div>;

        })
     }
     <div>{loading && "loading..."}</div>
     <div>{error && "Error"}</div>
    </div>
  );
}

export default App;

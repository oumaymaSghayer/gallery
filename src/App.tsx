import { useState, useMemo } from 'react';
import useImageLoad from './hooks/useImageLoad';
import useInViewPort from './hooks/useInViewPort';
import { Image } from './interfaces/image.interface';
import ImageCard from './components/imageCard';

function App() {
  const [pageNum, setPageNum] = useState(1);
  const { loading, error, imageList, hasMore}=useImageLoad(pageNum)
  const { isInViewport, ref } = useInViewPort(hasMore);
   useMemo(()=>{ setTimeout(function(){
     setPageNum((prev) => prev + 1)
  }, 2000); }, [isInViewport])
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

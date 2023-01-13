import { useState, useMemo, ChangeEvent } from 'react';
import useImageLoad from './hooks/useImageLoad';
import useInViewPort from './hooks/useInViewPort';
import { Image } from './interfaces/image.interface';
import ImageCard from './components/imageCard';
import "./App.css";


function App() {
  const [pageNum, setPageNum] = useState<number>(1);
  const [query, setQuery] = useState<string>("dogs");
  const { loading, error, imageList, hasMore}=useImageLoad(pageNum, query)
  const { isInViewport, ref } = useInViewPort(hasMore);
  useMemo(()=>{ setPageNum((prev) => prev + 1); }, [isInViewport])
  const handleSearch = (e: ChangeEvent<HTMLInputElement>)=>{
    setQuery(e.target.value)
    setPageNum(1)
  }
  return (
    <div className='App'>
      <input className='search-input' type="text" onChange={handleSearch} value={query}></input>
      <div className='list-container'>
      {
        imageList.length>0 ? imageList.map((e: Image,index:number)=>{
          if (imageList.length === index+1)
            return <div ref={ref} key={index}><ImageCard image={e} /></div>;
          return <div key={index}><ImageCard image={e} /></div>;

        }) : <div>Sorry no pictures matching your search..</div>
     }
      </div>
     <div>{loading && "loading..."}</div>
     <div>{error && "Error"}</div>
    </div>
  );
}

export default App;

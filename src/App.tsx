import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { flickrSearch } from './services/flickr.service';

function App() {
  useEffect(()=>{
    flickrSearch()
  },[])
  return (
    <div className="App">
     hi
    </div>
  );
}

export default App;

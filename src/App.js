import React from 'react';
import './App.css';
import CatPictureGallery from "./catPictureGallery";
import ColourGenerator from "./colourGenerator";


function App() {
  return (
    <div className="App">
      <ColourGenerator/>
      <CatPictureGallery/>
    </div>
  );
}

export default App;

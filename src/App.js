import React from 'react';
import './App.css';
import CatPictureGallery from "./catPictureGallery";
import ColourGenerator from "./colourGenerator";
import CatFact from "./catFact";


function App() {
  return (
    <div className="App">
      <ColourGenerator/>
      <CatFact/>
      <CatPictureGallery/>
    </div>
  );
}

export default App;

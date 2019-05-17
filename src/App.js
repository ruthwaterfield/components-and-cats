import React from 'react';
import './App.css';
import CatPictureGallery from "./catPictureGallery";
import ColourGenerator from "./colourGenerator";
import CatFact from "./catFact";
import Header from "./header";


function App() {
  return (
    <div className="App">
      <Header text={'Components and Cats'}/>
      <ColourGenerator/>
      <CatFact/>
      <CatPictureGallery/>
    </div>
  );
}

export default App;

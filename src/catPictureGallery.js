import React from 'react'
import HttpCat from "./httpCat";

const CatPictureGallery = () => (
  <div>
    <h2>Cat Picture Gallery</h2>
    <div className={'gallery'}>
      <HttpCat httpCode={200}/>
      <HttpCat httpCode={404}/>
    </div>
  </div>
)

export default CatPictureGallery



import React from 'react';

const HttpCat = ({httpCode}) => {
  const url = 'https://http.cat/' + httpCode
  return (
    <div className={'galleryItem'}>
      <h3>HTTP Cat for code {httpCode}:</h3>
      <img src={url} alt={httpCode + 'Cat'}/>
    </div>
  )
}

export default HttpCat



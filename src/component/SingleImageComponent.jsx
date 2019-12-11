import React from 'react';



const UnsplashImage = ({ url, key }) => (
    <div className="image-item" key={key} >
      <img src={url} onPointerEnter={()=>{console.log('clicked')}}/>
    </div>
  );

  export default UnsplashImage;
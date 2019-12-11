import React from 'react';
import './imageBox.css';

const imageBox = ({ imageArray, name, setIndex, shuffle, setAmar }) => {

  const onClicked = (index) => {
    setIndex(index);
    shuffle(setAmar);
  };

  const All = imageArray.map((value, index) =>
    <div className='image-pack' onClick={() => onClicked(index)}>
      <img className={'test_image'} src={value} alt={'myImage'} id={index} />
      <span className='img-text'>T-shirt</span>
    </div>


  )


  return (
    <div className='image_container'>
      {All}
    </div>
  )
}



export default imageBox;
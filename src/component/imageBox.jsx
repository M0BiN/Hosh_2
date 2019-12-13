import React from 'react';
import './imageBox.css';
import label from '../labels';
const imageBox = ({ imageArray, name, setIndex, shuffle, setAmar, current_index }) => {

  const onClicked = (index) => {
    if(current_index!==index){
      setIndex(index);
      shuffle(setAmar, index);
    }
    
  };

  const All = imageArray.map((value, index) =>
    <div className='image-pack' onClick={() => onClicked(index)}>
      <img className={'test_image'} src={value} alt={label[index]} key={label[index]+''+index} />
      <span className='img-text'>{label[index]}</span>
    </div>


  )


  return (
    <div className='image_container'>
      {All}
    </div>
  )
}



export default imageBox;
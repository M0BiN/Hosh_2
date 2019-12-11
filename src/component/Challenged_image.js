import React from 'react';
import './Challenged_image.css';

const Challenged_image = ({img, name})=>{



return(
    <div className='cimage-pack'>
      <img className={'ctest_image'} src={img} alt={name} id={0} />
        <span className='cimg-text'>{name}</span>
    </div>
)

};



export default Challenged_image;
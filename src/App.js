import React from 'react';
import './App.css';
import * as tf from '@tensorflow/tfjs';
import axios from 'axios';
import khoda from './Images';
import InfiniteScroll from 'react-infinite-scroll-component';
import ImageBox from './component/imageBox'
import Challenged_image from './component/Challenged_image.js';
import ProegressBar from './component/progress-bar/progress-bar-component';
let totalImage = 50;
let amar1 = [25, 30, 45 , 70 , 80 ,30 , 44 , 32, 10, 90]
let myClass = ['T-shirt/top',
               'Trouser    ',
               'Pullover   ',
               'Dress      ',
               'Coat       ',
               'Sandal     ',
               'Shirt      ',
               'Sneaker    ',
               'Bag        ',
               'Ankle boot ']




function App() {
    const [images, setImages] = React.useState(khoda.slice(0, totalImage));
    const [index, setIndex] = React.useState(0);
    const [loaded, setIsLoaded] = React.useState(true);
    const [amar, setAmar] = React.useState(amar1);




    React.useEffect(() => {
        fetchImages(setImages, setIsLoaded);

    }, [])
    
   




    return (
        

            <>

                <div className="Main-Scroll-Container">
                    <div className='ScrollContainer'>
                        <InfiniteScroll
                            dataLength={images}
                            next={() => fetchImages(setImages, setIsLoaded)}
                            hasMore={true}
                            loader={
                                <img
                                    src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
                                    alt="loading"
                                />}
                        >
                            <ImageBox imageArray={images} setIndex={setIndex} shuffle={shuffle} setAmar={setAmar}/>


                        </InfiniteScroll>
                    </div>
                    <div className='static-div'>



                        <Challenged_image img={images[index]} name={'T-Shirt'} setIndex={setIndex} />
                        <div className='p-container'>
                        {myClass.map((value, index)=><ProegressBar precent={amar[index]} label={value} id={index}/>
                        )}
                        
                        
                        </div>


                    </div>
                </div>

            </>
    );
}


const justfortest = (input, setAmar) => {
    console.log(input)
      axios.get(`http://127.0.0.1:5050/login?username=${input}`)
      .then((data)=>{
        console.log(data.data)
        setAmar(data.data)

      })




}

const shuffle = (setAmar, indx)=>{
    // justfortest(indx, setAmar);
    amar1 = []
    for(let i = 0; i < 10; i++)
    amar1.push(Math.floor(Math.random() * Math.floor(100)));
    setAmar(amar1);
}



export default App;




const fetchImages = (setImages, setIsLoaded) => {
    setImages(khoda.slice(0, totalImage));
    totalImage += 10;
    setIsLoaded(true);
};
import React from 'react';
import './App.css';
import axios from 'axios';
import khoda from './Images';
import InfiniteScroll from 'react-infinite-scroll-component';
import ImageBox from './component/imageBox'
import Challenged_image from './component/Challenged_image.js';
import ProegressBar from './component/progress-bar/progress-bar-component';
import label from './labels';
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
                            <ImageBox imageArray={images} setIndex={setIndex} shuffle={shuffle} setAmar={setAmar} current_index={index}/>


                        </InfiniteScroll>
                    </div>
                    <div className='static-div'>



                        <Challenged_image img={images[index]} name={label[index]} setIndex={setIndex} />
                        <div className='p-container'>
                        {myClass.map((value, index)=><ProegressBar precent={amar[index]} label={value} id={index} key={'p'+index}/>
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
        let fin = rounding(data.data[0])
        setAmar(fin)

      })




}

const shuffle = (setAmar, indx, current_index)=>{
    if(current_index === indx)return;
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






const sumof = (myarray)=>{
    let sum = 0;
    for(let i = 0; i < myarray.length ; i++){
            sum += myarray[i];
    }
    return sum;
}


const bigIndex = (myarray)=>{
    let target = 0;
    for(let i = 0; i < myarray.length ; i++){
        if(myarray[i]>=myarray[target]){
            target = i;
        }

    }
    return target;
}


const rounding = (myarray)=>{

    while(sumof(myarray) !== 100 ){
        let difference = 100 - sumof(myarray);
        myarray[bigIndex(myarray)] += difference;
    }

    return myarray;


}
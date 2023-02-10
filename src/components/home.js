import React,{useContext, useEffect} from 'react';
import News from './news';
import {UserContext} from '../api/context';
import coverimg from '../static/images/cover-image-nn.jpg';

function Home() {
    const {news} = useContext(UserContext)
    useEffect(() => {
        console.log(news)
    }, [news])
  return (
    <div>
        <div className="cover-image-nn">
            {/* <img className='main-slider-img' src={coverimg} alt="cover-image-nn"/> */}
        </div>
        <News news={news}/>
    </div>
  )
}

export default Home;
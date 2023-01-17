import React,{useContext, useEffect} from 'react';
import News from './news';
import {UserContext} from '../api/context';

function Home() {
    const {news} = useContext(UserContext)
    useEffect(() => {
        console.log(news)
    }, [news])
  return (
    <div>
        <div className="main-slider-div">
            <img className="main-slider-img" src="../static/images/indepSliderImg.jpg" alt="HappyIndependence Day"/>
        </div>
        <News news={news}/>
    </div>
  )
}

export default Home;
import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {UserContext} from '../api/context';
import alternateimage from '../static/images/news-image.jpg'

function News({news}) {
    let filterednews=[];
    filterednews=news?.slice(-12);
    let popular=[];
    popular=news?.slice(11, 15);
    let Latest=[];
    Latest=news?.slice(15, 19);
    let Trending=[];
    Trending=news?.slice(30, 34);
    const [state,setState] = useState(false);
    const {isTrue} = useContext(UserContext)

    // const SliderProperty = {
    //     Id: 0,
    //     Title: '',
    //     ImageSrc: ''
    // }
    // const [sliderProperty, setSliderProperty] = useState(SliderProperty);
    // const { Id, Title, ImageSrc } = sliderProperty;
    // const [count, setCount] = useState(0);
    // const [animationCls, setAnimationCls] = useState('displayBlock fade');

    // const NextClick = () => {
    //     setAnimationCls(() => ('displayNone fade'));
    //     const myTimeout = setTimeout(() => {
    //         setAnimationCls('displayBlock fade')
    //     }, 100);

    //     if (count <= filterednews.length-1) {
    //         setCount(count+1);
    //     }

    //     if (count === filterednews.length-1) {
    //         setCount(0);
    //     }
    // };

    // useEffect(() => {
    //     setSliderProperty((previous) => ({ 
    //         ...previous, 
    //         Id: filterednews[count]?.id,
    //         Title: filterednews[count]?.newsTitle, 
    //         ImageSrc: filterednews[count]?.newsImage
    // }));
    // }, [count]);


    // useEffect(() => {
    //      const interval= setInterval(() => {
    //         NextClick();
    //     }, 2000);
    //     return () => clearInterval(interval);
    // }, [count]);


  return (
    <div className='container-fluid'>
        {isTrue ? 
            <div style={{textAlign:'center', marginTop:'30px'}}>
                <div>
                    <div className="spinner-grow text-primary" role="status">
                    </div>
                    <div className="spinner-grow text-primary" role="status">
                    </div>
                    <div className="spinner-grow text-primary" role="status">
                    </div>
                </div>
                <h5>Loading...</h5>
            </div>
        :
        <div>
            <div style={{background:'grey', height:'1px', margin:'15px 0 20px 0', opacity:0}}></div>
            <div className='d-flex justify-content-between flex-wrap'>
                <div>
                    <h5 style={{fontWeight:700}}>Latest</h5>
                    {Latest?.map(n => (
                        <Link
                            to={`/read-news/${n.id}`}
                            state= {{state:n}}
                            key={n.id}
                        >
                            <div className='d-flex justify-content-around align-items-center mb-2'>
                                <div>
                                    <img 
                                    style={{width:'170px', height:'120px'}}
                                    src={n.newsImage} id={n.id}
                                    onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src=alternateimage;
                                    }}
                                    />
                                </div>
                                <div style={{width:'200px'}}><h6 style={{fontSize:"14px", margin: '0 0 0 5px'}} className='title_text'>{n.newsTitle}</h6></div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div>
                    <h5 style={{fontWeight:700}}>Popular</h5>
                    {popular?.map(n => (
                        <Link
                            to={`/read-news/${n.id}`}
                            state= {{state:n}}
                            key={n.id}
                        >
                            <div className='d-flex justify-content-around align-items-center mb-2'>
                                <div>
                                    <img 
                                    style={{width:'170px', height:'120px'}}
                                    src={n.newsImage} id={n.id} 
                                    onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src=alternateimage;
                                    }}/>
                                </div>
                                <div style={{width:'200px'}}><h6 style={{fontSize:"14px", margin: '0 0 0 5px'}} className='title_text'>{n.newsTitle}</h6></div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div>
                    <h5 style={{fontWeight:700}}>Trending</h5>
                    {Trending?.map(n => (
                        <Link
                            to={`/read-news/${n.id}`}
                            state= {{state:n}}
                            key={n.id}
                        >
                            <div className='d-flex justify-content-around align-items-center mb-2'>
                                <div>
                                    <img style={{width:'170px', height:'120px'}}
                                    src={n.newsImage} id={n.id} 
                                    onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src=alternateimage;
                                    }}/>
                                </div>
                                <div style={{width:'200px'}}><h6 style={{fontSize:"14px", margin: '0 0 0 5px'}} className='title_text'>{n.newsTitle}</h6></div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* <div className='slideshow-container '>
            <div className={animationCls}>
                <div className="numbertext">{Id}</div>
                <img src={ImageSrc} className='imageStyle' alt="Img" />
            </div>
            <div className="text">{Title}</div>
            </div> */}

            {/* <div className='d-flex'>
                {news?.filter((v, i) =>i==2).map(ele =>(
                    <div>
                        <img src={ele.newsImage} id={ele.id} />
                        <h6 className='title_text'>{ele.newsTitle}</h6>
                    </div>
                ))}
            </div> */}

            <div className="body-div0">
                <span style={{width:'8px', background:'maroon'}}></span>
                <h2>
                    ARY NEWS
                </h2>
            </div>
            <div className="headwith-3divs">
                {news?.map(element => (
                    element.newsUrl.toString().includes('arynews') ?
                    <Link 
                        to={`/read-news/${element.id}`}
                        state= {{state:element, courtesy:'ARY News'}}
                        key={element.id}
                    >
                        <div className="body-div1" key={element.id}>
                            <div className="pic1">
                                <img 
                                src={element.newsImage} 
                                id={element.id} 
                                onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src=alternateimage;
                                }}/>
                            </div>
                            <h6 className='title_text'>{element.newsTitle}</h6>
                        </div>
                    </Link>
                    :
                    null
                ))}
            </div>

            <div className="body-div0">
                <span style={{width:'8px', background:'orange'}}></span>
                <h2>
                    GEO NEWS
                </h2>
            </div>
            <div className="headwith-3divs">
                {news?.map(element => (
                    element.newsUrl.toString().includes('geo.tv') ?
                    <Link 
                        to={`/read-news/${element.id}`}
                        state= {{state:element, courtesy:'Geo News'}}
                        key={element.id}
                    >
                        <div className="body-div1" key={element.id}>
                            <div className="pic1">
                                <img 
                                src={element.newsImage} 
                                id={element.id}
                                onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src=alternateimage;
                                }}
                                />
                            </div>
                            <h6 className='title_text'>{element.newsTitle}</h6>
                        </div>
                    </Link>
                    :
                    null
                ))}
            </div>


            <div className="body-div0">
                <span style={{width:'8px', background:'red'}}></span>
                <h2>
                    EXPRESS TRIBUNE
                </h2>
            </div>
            <div className="headwith-3divs">
            {news?.map(element => (
                    element.newsUrl.toString().includes('tribune.com.pk') ?
                    <Link 
                        to={`/read-news/${element.id}`}
                        state= {{state:element, courtesy:'Express Tribune'}}
                        key={element.id}
                    >
                        <div className="body-div1" key={element.id}>
                            <div className="pic1">
                                <img 
                                src={element.newsImage} 
                                id={element.id}
                                onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src=alternateimage;
                                }}
                                />
                            </div>
                            <h6 className='title_text'>{element.newsTitle}</h6>
                        </div>
                    </Link>
                    :
                    null
            ))}
            </div>

            <div className="body-div0">
                <span style={{width:'8px', background:'steelBlue'}}></span>
                <h2>
                    DUNYA NEWS
                </h2>
            </div>        
            <div className="headwith-3divs">
                {news?.map(element => (
                    element.newsUrl.toString().includes('dunyanews.tv') ?
                    <Link 
                        to={`/read-news/${element.id}`}
                        state= {{state:element, courtesy:'Dunya News'}}
                        key={element.id}
                    >
                        <div className="body-div1" key={element.id}>
                            <div className="pic1">
                                <img 
                                src={element.newsImage} 
                                id={element.id}
                                onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src=alternateimage;
                                }}
                                />
                            </div>
                            <h6 className='title_text'>{element.newsTitle}</h6>
                        </div>
                    </Link>
                    :
                    null
                ))}
            </div>

            <div className="body-div0">
                <span style={{width:'8px', background:'blue'}}></span>
                <h2>
                    SAMAA NEWS
                </h2>
            </div>
            <div className="headwith-3divs">
                {news?.map(element => (
                    element.newsUrl.toString().includes('samaaenglish') ?
                    <Link 
                        to={`/read-news/${element.id}`}
                        state= {{state:element, courtesy:'Samaa News'}}
                        key={element.id}
                    >
                        <div className="body-div1" key={element.id}>
                            <div className="pic1">
                                <img 
                                src={element.newsImage} 
                                id={element.id}
                                onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src=alternateimage;
                                }}
                                />
                            </div>
                            <h6 className='title_text'>{element.newsTitle}</h6>
                        </div>
                    </Link>
                    :
                    null
                ))}
            </div>
        </div>
        }
    </div>
  )
}

export default News;
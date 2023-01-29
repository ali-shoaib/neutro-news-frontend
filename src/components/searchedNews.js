import React from 'react';
import { useLocation, Link } from "react-router-dom";

function SearchedNews() {
    const { state } = useLocation();
    const { searchedNews,text } = state
    console.log(state, text);
  return (
    <div className='container-fluid'>
        <div className='d-flex justify-content-between align-items-center mt-3'>
            <div>
                <h3 style={{fontWeight: 300}}>Searches for <b style={{fontWeight: 500}}>{text}</b></h3>
            </div>
            <div>
                <button className="btn_reload" style={{border: 'none',fontSize: '25px',padding: '0 12px 0 12px',background: 'steelBlue', borderRadius: '8px'}}>
                    <Link to='/' style={{color:'#ffff'}}>
                        {'<<'}
                    </Link>
                </button>
            </div>
        </div>

        {searchedNews?.length != 0 ?
            <div>
                <div className="body-div0">
                    <span style={{width:'8px', background:'blue'}}></span>
                    <h2>
                        SAMAA NEWS
                    </h2>
                </div>
                <div className="headwith-3divs">
                    {searchedNews?.map(element => (
                        element.newsUrl.toString().includes('samaaenglish') ?
                        <div className="body-div1" key={element.id}>
                            <div className="pic1">
                                <img src={element.newsImage} id={element.id} />
                            </div>
                            <h6 className='title_text'>{element.newsTitle}</h6>
                        </div>
                        :
                        null
                    ))}
                </div>

                <div className="body-div0">
                    <span style={{width:'8px', background:'maroon'}}></span>
                    <h2>
                        ARY NEWS
                    </h2>
                </div>
                <div className="headwith-3divs">
                    {searchedNews?.map(element => (
                        element.newsUrl.toString().includes('arynews') ?
                        <div className="body-div1" key={element.id}>
                            <div className="pic1">
                                <img src={element.newsImage} id={element.id} />
                            </div>
                            <h6 className='title_text'>{element.newsTitle}</h6>
                        </div>
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
                    {searchedNews?.map(element => (
                        element.newsUrl.toString().includes('geo.tv') ?
                        <div className="body-div1" key={element.id}>
                            <div className="pic1">
                                <img src={element.newsImage} id={element.id} />
                            </div>
                            <h6 className='title_text'>{element.newsTitle}</h6>
                        </div>
                        :
                        null
                    ))}
                </div>

                <div className="body-div0">
                    <span style={{width:'8px', background:'red'}}></span>
                    <h2>
                        EXPRESS NEWS
                    </h2>
                </div>        
                <div className="headwith-3divs">
                {searchedNews?.map(element => (
                        element.newsUrl.toString().includes('express.pk') ?
                        <div className="body-div1" key={element.id}>
                            <div className="pic1">
                                <img src={element.newsImage} id={element.id} />
                            </div>
                            <h6 className='title_text'>{element.newsTitle}</h6>
                        </div>
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
                    {searchedNews?.map(element => (
                        element.newsUrl.toString().includes('dunyanews.tv') ?
                        <div className="body-div1" key={element.id}>
                            <div className="pic1">
                                <img src={element.newsImage} id={element.id} />
                            </div>
                            <h6 className='title_text'>{element.newsTitle}</h6>
                        </div>
                        :
                        null
                    ))}
                </div>

                {/* <div className="body-div0">
                    <span style={{width:'8px', background:'yellow'}}></span>
                    <h2>
                        PARHLO NEWS
                    </h2>
                </div>        
                <div className="headwith-3divs">
                    {searchedNews?.map(element => (
                        element.newsUrl.toString().includes('parhlo.com') ?
                        <div className="body-div1" key={element.id}>
                            <div className="pic1">
                                <img src={element.newsImage} id={element.id} />
                            </div>
                            <h6 className='title_text'>{element.newsTitle}</h6>
                        </div>
                        :
                        null
                    ))}
                </div> */}
            </div>
        :
        <div style={{textAlign: 'center',fontSize: '20px',color: 'brown',fontWeight: 600}}>No News Found.</div>
    }
    </div>
  )
}

export default SearchedNews
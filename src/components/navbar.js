import React, { useState, useContext, useEffect } from 'react';
import { useNavigate,Link,useLocation } from "react-router-dom";
import {UserContext} from '../api/context';
import AlertMessage from './alertMessage';

function Navbar() {
    const {news, scrapeNews, isScrape, msg} = useContext(UserContext)
    const [text, setText]=useState('');
    let searchedNews=[];
    const navigate = useNavigate();

    const location = useLocation();
    const path = location.pathname;
    const [display, setDisplay] = useState(false);
    useEffect(() => {
        setDisplay(path === "/" ? true : false);
    },[path])

    const submitSearch=(e)=>{
        e.preventDefault();
        searchedNews.length=0;

        news?.forEach(element => {
            if(element.newsTitle.includes(text.charAt(0).toUpperCase() + text.slice(1))){
                searchedNews.push(element);
            }
            if(element.newsTitle.includes(text)){
                searchedNews.push(element);
            }
            if(element.newsTitle.includes(text.toUpperCase())){
                searchedNews.push(element);
            }
            navigateToSearchedNews();
            setText('');
        })
    }
    const navigateToSearchedNews=()=>{
        if(searchedNews.length !== 0 || searchedNews !== []){
            navigate("/searched-news",{state:{searchedNews,text}});
        }
        else{
            alert("No news found.");
        }
    }
  return (
    <div>
        <div className="top d-flex justify-content-around align-items-center">
            <img className="FUUAST-logo" src="../static/images/federal-urdu-university-logo.png" alt="FUUAST logo" />
            <img className="NN-logo" src="../static/images/NNlogoFinal.png" alt="NeutroNews" />
            <>.</>
        </div>
    
        {/* <nav>
            <input type="checkbox" id="nav-toggle"/>
            <ul className="unor">
                <li><a href="#">HOME</a></li>
                <li><a href="#">LATEST NEWS</a></li>
                <li><a href="#">PAKISTAN</a></li>
                <li> <a href="#">POLITICS</a> </li>
                <li> <a href="#">BUSINESS</a> </li>
                <li> <a href="#">SPORTS</a> </li>
                <div className="right">
                    <form style={{display: 'flex', alignItems:'center'}} onSubmit={submitSearch}>
                        <input type="text" name="news" value={text} onChange={e=>setText(e.target.value)} placeholder="Search News.." style={{margin:'0 5px 0 0', padding: '0 0 0 5px', height: '34px', width: '250px'}}/>
                        <button type="submit" style={{background: 'transparent', border: 'none'}} className="btn-submit_news">
                            <img className="search-icon" src="../static/images/search-icon.png" alt="search icon"/>
                        </button>
                    </form>
                </div>
            </ul>
            <label className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </label>
        </nav> */}

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto nav_initial" style={{alignItems:'center'}}>
                    <li className="nav-item active">
                        <Link className="nav-link" to={'/'}>Home</Link>
                    </li>
                    <li>
                        {display &&
                        <button className="btn btn-secondary btn-sm" disabled={isScrape ? true : false} type="button" onClick={scrapeNews}>
                        {isScrape ?
                        <span>
                        <span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span>
                        Scraping...
                        </span>
                        : <span>Scrape</span>
                        }
                        </button>
                        }
                    </li>
                </ul>
                <span>
                    <form className='d-flex align-items-center mr-3' onSubmit={submitSearch}>
                        <input type="text" name="news" value={text} onChange={e=>setText(e.target.value)} placeholder="Search News.." style={{margin:'0 5px 0 0', padding: '0 0 0 5px', height: '34px', width: '300px'}}/>
                        <button type="submit" style={{background: 'transparent', border: 'none'}} className="btn-submit_news">
                            <img className="search-icon" src="../static/images/search-icon.png" alt="search icon"/>
                        </button>
                    </form>
                </span>
            </div>
        </nav>
        {msg=="DataScraped" ? <AlertMessage /> : null}
    </div>
  )
}

export default Navbar
import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import {UserContext} from '../api/context';

function Navbar() {
    const {news, scrapeNews} = useContext(UserContext)
    const [text, setText]=useState('');
    const [searchedNews, setSearchedNews] = useState([]);
    const navigate = useNavigate();

    const submitSearch=(e)=>{
        e.preventDefault();
        setSearchedNews([]);

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
        if(searchedNews.length != 0 || searchedNews != []){
            navigate("/searched-news",{state:{searchedNews,text}});
        }
        else{
            alert("No news found.");
        }
    }
  return (
    <div>
        <div className="top">
            <img className="FUUAST-logo" src="../static/images/federal-urdu-university-logo.png" alt="FUUAST logo" />
            <img className="NN-logo" src="../static/images/NNlogoFinal.png" alt="NeutroNews" />
            .
        </div>
    
        <nav>
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
            <label for="nav-toggle" className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </label>
        </nav>
    
        <div className="trending" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div className="set">
            </div>
            <button onClick={scrapeNews} className="btn_reload" style={{background: 'transparent', border: 'none'}}>
                <img style={{width: '20px', height: '20px'}} src="../static/images/reload-icon.png" alt="reload-icon"/>
            </button>    
        </div>
    </div>
  )
}

export default Navbar
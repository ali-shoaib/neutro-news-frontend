import React,{ useState, createContext } from "react";
import axios from "axios";

export const UserContext = createContext();

export const GlobalProvider = ({children}) => {
    const [news, setNews] = React.useState(null);
    const [isTrue, setIsTrue] = useState(false);
    const [isScrape, setIsScrape] = useState(false);
    const [msg,setMsg] = useState('');

    React.useEffect(() => {
      getNews();
      // scrapeNews();
      const interval = setInterval(() => {
        scrapeNews();
      }, 36000000);
    
      return () => clearInterval(interval);
    }, []);

    const getNews = async () => {
      try{
        setIsTrue(true);
        axios.get('getallnews')
        .then((res) => {
          setNews(res.data)
          setIsTrue(false);
        })
        .catch((error) => {
          console.log(error)
        })
      }catch (error) {
        console.log(error);
      }
    };

    const scrapeNews=()=>{
      try {
        setIsScrape(true);
        setMsg('');
        axios.post('/')
        .then(function(response){ return response; })
        .then(function(data) {
          setIsScrape(false);
          console.log("News Scraped!",data);
          setMsg("DataScraped");
          getNews();
        })
      } catch (error) {
        setIsScrape(false);
        console.log(error);
      }
    }

  return (
    <UserContext.Provider value={{news, scrapeNews, isTrue, isScrape, msg}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;
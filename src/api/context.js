import React,{ useState, createContext } from "react";
import axios from "axios";

export const UserContext = createContext();

export const GlobalProvider = ({children}) => {
    const [news, setNews] = React.useState(null);
    const [isTrue, setIsTrue] = useState(false);
    const [isScrape, setIsScrape] = useState(false);

    React.useEffect(() => {
      getNews();
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
        axios.post('/')
        .then(function(response){ return response; })
        .then(function(data) {
          setIsScrape(false);
          console.log("News Scraped!",data);
          alert("News Scraped!");
          getNews();
        })
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <UserContext.Provider value={{news, scrapeNews, isTrue, isScrape}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;
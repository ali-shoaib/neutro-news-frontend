import React,{ useState, createContext } from "react";
import axios from "axios";

export const UserContext = createContext();

export const GlobalProvider = ({children}) => {
    const [news, setNews] = React.useState(null);
    const [isTrue, setIsTrue] = useState(false);

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
        axios.post('/')
        .then(function(response){ return response; })
        .then(function(data) {
          const items = data;
          console.log("News Scraped!",items);
          alert("News Scraped!");
          getNews();
        })
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <UserContext.Provider value={{news, scrapeNews, isTrue}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;
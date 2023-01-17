import React,{ useState, createContext } from "react";
import axios from "axios";

export const UserContext = createContext();

export const GlobalProvider = ({children}) => {
    const [news, setNews] = React.useState(null);

    React.useEffect(() => {
        axios
      .get('getallnews')
      .then((res) => {
        setNews(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
        // getNews();
    }, []);

    const getNews = async () => {
        try {
            const res = await axios.get('getallnews');
            setNews(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const scrapeNews=()=>{
        try {
            const res = axios.post('');
            // setNews(res.data);
            console.log("Scrape news res: ", res);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <UserContext.Provider value={{news, scrapeNews}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;
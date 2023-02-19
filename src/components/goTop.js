import React from 'react';
import { useEffect,useState } from 'react';

const GoTop = () => {
    const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400){
      setVisible(true)
    } 
    else if (scrolled <= 400){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
    return (
      <>
        <div>
        {visible && (
            <button onClick={scrollToTop} className="backToTop">
                ^
            </button>
        )}
        </div>
      </>
    );
  };
  export default GoTop;
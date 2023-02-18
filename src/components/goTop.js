import React from 'react';
import { useEffect } from 'react';

const GoTop = () => {
    const [showButton, setShowButton] = React.useState(false);
    useEffect(() => {
        const handleScrollButtonVisibility = () => {
            window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
        }
        window.addEventListener('scroll',handleScrollButtonVisibility);
        return() => {
            window.removeEventListener('scroll',handleScrollButtonVisibility)
        }
    },[]);
    
    const handleScrollToTop =()=>{
        window.scrollTo({top: 0, behavior:'smooth'})
    }
    return (
      <>
        <div>
        {showButton && (
            <button onClick={handleScrollToTop} className="backToTop">
                ^
            </button>
        )}
        </div>
      </>
    );
  };
  export default GoTop;
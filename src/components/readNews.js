import React from 'react';
import {useLocation, Link} from 'react-router-dom'

function ReadNews() {
  const location = useLocation();
  const {state:{state}} = location;

  const GoTheSource = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <div className='container mt-5'>
      <div className='d-flex justify-content-between align-items-center'>
        <button className="btn_reload mb-2" style={{border: 'none',fontSize: '25px',padding: '0 12px 0 12px',background: 'steelBlue', borderRadius: '8px'}}>
          <Link to='/' style={{color:'#ffff'}}>
            {'<<'}
          </Link>
        </button>
        <button onClick={() => GoTheSource(state?.newsUrl)} className='btn btn-sm btn-secondary'>
          Go to Source
        </button>
      </div>
      <div className='mb-3'>
        <h2>{state?.newsTitle}</h2>
      </div>
      <div>
        <img 
        src={state?.newsImage}
        style={{width: '700px', maxWidth: '100%'}}
        alt="newsimage"
        onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src="https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg";
        }}
        />
      </div>
      <div className='mt-2'>
        <span style={{color:'grey'}}><b>Author:</b> Web Desk</span>
      </div>
      <div className='mt-3' style={{width: '800px', maxWidth: '98%'}}><p>{state?.newsText}</p></div>
    </div>
  )
}

export default ReadNews
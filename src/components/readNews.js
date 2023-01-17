import React from 'react';
import {useLocation, Link} from 'react-router-dom'

function ReadNews() {
  const location = useLocation();
  const {state:{state}} = location;

  return (
    <div className='container mt-5'>
      <div>
        <button className="btn_reload mb-2" style={{border: 'none',fontSize: '25px',padding: '0 12px 0 12px',background: 'steelBlue', borderRadius: '8px'}}>
            <Link to='/' style={{color:'#ffff'}}>
                {'<<'}
            </Link>
        </button>
      </div>
      <div className='mb-3'>
        <h2>{state?.newsTitle}</h2>
      </div>
      <div>
        <img src={state?.newsImage} alt="newsimage"/>
      </div>
      <div className='mt-3' style={{width: '800px', maxWidth: '98%'}}><p>{state?.newsText}</p></div>
    </div>
  )
}

export default ReadNews
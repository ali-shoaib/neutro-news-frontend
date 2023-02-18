import React from 'react';
import Alert from '@mui/material/Alert';
import { useEffect } from 'react';

function AlertMessage() {
    const [open, setOpen] = React.useState(true);
    useEffect(() => {
        setTimeout(function () {
          setOpen(false);
        }, 5000);
    }, []);
    
  return (
    <div>
        {open ?
        <Alert variant="filled" severity="success" className='alertMsg'>
            News Scraped!
        </Alert>:
        null
        }
    </div>
  )
}

export default AlertMessage
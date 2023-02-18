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
        <Alert variant="filled" severity="success" style={{width: '230px',position: 'fixed',right: '30px', bottom: '50px'}}>
            News Scraped!
        </Alert>:
        null
        }
    </div>
  )
}

export default AlertMessage
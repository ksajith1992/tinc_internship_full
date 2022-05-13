import React,{ useState,useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from '../../Constants/Axios'

import Button from 'react-bootstrap/Button';

export default function MediaControlCard() {
  const token=localStorage.getItem('token_intern');
  const [data, setData] = useState([]);
  const theme = useTheme();
  useEffect(() => {
    axios.get('shedule_events/' , { headers: {"Authorization" : `Bearer ${token}`} })
			.then(res => {
			setData(res.data.data);
			})
			.catch((error) => {
			console.log(error)
			})
  },[])
  function joinnow(e){
    const link=e.target.id;
    window.open(link)
  }

  return (
      
    <div className="row"> 
{data.map((obj)=>
<div className="col-sm-12 col-md-4 p-4" key={obj.id}>
<Card sx={{ display: 'flex' }} className='Eventbk'>
      <Box className='EventsCard' sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent className='left' sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
           {obj.event_topic}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {obj.event_date}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {obj.event_time}
          </Typography>
        </CardContent>
        
      </Box>
      <Button variant="warning" className='p-5 m-2' style={{borderRadius:20}} id={obj.event_link} onClick={joinnow}><b>JOIN</b></Button>

    </Card>
    </div>)}

    

    

      
    </div> 
    
  );
}

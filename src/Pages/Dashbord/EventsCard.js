import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Button from 'react-bootstrap/Button';

export default function MediaControlCard() {
  const theme = useTheme();

  return (
      
    <div className="row"> 

<div className="col-sm-12 col-md-4 p-4">
<Card sx={{ display: 'flex' }}>
      <Box className='EventsCard' sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent className='left' sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
           Event Name
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            15/02/2022
          </Typography>
        </CardContent>
        
      </Box>
      <Button variant="warning" className='right p-5'><b>JOIN</b></Button>

    </Card>
    </div>

    
<div className="col-sm-12 col-md-4 p-4">
<Card sx={{ display: 'flex' }}>
      <Box className='EventsCard' sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent className='left' sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
           Event Name
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            15/02/2022
          </Typography>
        </CardContent>
        
      </Box>
      <Button variant="warning" className='right p-5'><b>JOIN</b></Button>

    </Card>
    </div>

    
<div className="col-sm-12 col-md-4 p-4">
<Card sx={{ display: 'flex' }}>
      <Box className='EventsCard' sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent className='left' sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
           Event Name
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            15/02/2022
          </Typography>
        </CardContent>
        
      </Box>
      <Button variant="warning" className='right p-5'><b>JOIN</b></Button>

    </Card>
    </div>

    
<div className="col-sm-12 col-md-4 p-4">
<Card sx={{ display: 'flex' }}>
      <Box className='EventsCard' sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent className='left' sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
           Event Name
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            15/02/2022
          </Typography>
        </CardContent>
        
      </Box>
      <Button variant="warning" className='right p-5'><b>JOIN</b></Button>

    </Card>
    </div>

    
<div className="col-sm-12 col-md-4 p-4">
<Card sx={{ display: 'flex' }}>
      <Box className='EventsCard' sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent className='left' sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
           Event Name
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            15/02/2022
          </Typography>
        </CardContent>
        
      </Box>
      <Button variant="warning" className='right p-5'><b>JOIN</b></Button>

    </Card>
    </div>
    

      
    </div> 
    
  );
}

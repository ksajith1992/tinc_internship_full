import  React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProductCard from './Tab1';
import Stocks from './Tab2';
import Technology from './Tab3';

import axios from '../../../Constants/Axios'
import Design from './Tab4';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get('products/')
      .then(res => {
        console.log(res.data)
        setData(res.data.data)   
      })
      .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } });
  },[])



  return (

    <Box sx={{ width: '100%' }}>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs example">
          {data.map((obj)=>
          <Tab label={obj.product_name} key={obj.id} id={obj.id} {...a11yProps(0)} />)}
         
        </Tabs>
      </Box>
      
      <TabPanel value={value} index={0}>
         <ProductCard />
      </TabPanel>
      <TabPanel value={value} index={1}>
         <Stocks />
      </TabPanel>
      <TabPanel value={value} index={2}>
         <Technology />
     </TabPanel>
     <TabPanel value={value} index={3}>
         <Design />
     </TabPanel>
    </Box>

  );
}

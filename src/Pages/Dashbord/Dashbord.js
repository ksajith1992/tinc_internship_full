import React, {useState,useEffect} from 'react';
import '../MainCss.css'
import '../Home/Home.css'
import { useLocation } from 'react-router-dom';
import NaveBar_inner from '../../Components/NaveBar_inner';
import ProgressChart from './ProgressChart';
import ScheduledEvents from './ScheduledEvents';
import Footer from '../../Components/Footer';
import Tasks from './Tasks';
import Chat from '../Chat/Chat';

function Dashbord() {
  let location = useLocation()
  const id=location.state.id
  return (
    <>
    <NaveBar_inner />
    


<ProgressChart items={id}/>
<ScheduledEvents />
<div >
{/* <Chat/> */}
</div>
<Tasks />

<Footer />
    </>
  )
}

export default Dashbord
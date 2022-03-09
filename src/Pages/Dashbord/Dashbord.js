import React, {useState} from 'react';
import '../MainCss.css'
import '../Home/Home.css'


import NaveBar_inner from '../../Components/NaveBar_inner';
import ProgressChart from './ProgressChart';
import ScheduledEvents from './ScheduledEvents';
import Footer from '../../Components/Footer';
import Tasks from './Tasks';

function Dashbord() {
  return (
    <>
    <NaveBar_inner />
    
<div className="row p-4">
  <div className="col-sm-12 col-md-12 p-5">
    <h1 className='yellow_head'>Hi, Alex</h1>
    <div className='dashbord_head_p mt-4'>See your progress here</div>
  </div>
</div>

<ProgressChart />
<ScheduledEvents />
<Tasks />


<Footer />

   
    </>
  )
}

export default Dashbord
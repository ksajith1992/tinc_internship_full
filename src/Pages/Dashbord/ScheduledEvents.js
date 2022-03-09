import React, {useState} from 'react';
import EventsCard from './EventsCard';

function ScheduledEvents() {
  return (
<>
<div>    
    <h2 className='left'>Scheduled Events</h2>
</div>

<div className="row">

<div className="col-sm-12 col-md-12 p-5 pt-1">
<EventsCard />
</div>
  
</div> 
</>
)
}

export default ScheduledEvents
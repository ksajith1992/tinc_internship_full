import React from 'react';
import Button from 'react-bootstrap/Button';
import onlinemode from '../../../Images/onlinemode.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function OnlineMode() {
  return <>
     
<div className="row onlinemode mt-5">

<div className="col-xl-6 col-md-6 mb-4 rightside">
<h3>Online Mode is <br /> Now AvaIlable</h3>
<p className='black mb-5'>Create React App doesnt handle backend logic so you can use it with any backend you want.
 Under the hood, it uses Babel and webpack, but you don’t need to know anything about them. Create React App doesnt handle backend logic so you can use it with any backend you want. 
 Create React App doesnt handle backend logic so you can use it with any backend you want. 
 Under the hood, it uses Babel and webpack need to know anything about them. need to know anything about them.
 </p>

 <br /> 
 <Button type="button" class="btn btn-primary "> Learn More <FontAwesomeIcon icon={faArrowRight} /></Button>

</div>

<div className="col-xl-6 col-md-6 mb-4">
    <img src={onlinemode} className='onlinemode' alt='onlinemode'/>
</div>

</div>


  </>;
}

export default OnlineMode;

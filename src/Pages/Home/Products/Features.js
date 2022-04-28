import React from 'react';
import benefits from '../../../Images/benefits.png'

import Button from 'react-bootstrap/Button';


function Features() {
  return <>
    <div className="Features_bg"> 
      <div className="row p-5">
        <div className="col-xl-7 col-md-12 mb-4 rightside p-5">
          <h3 className='mb-3'>Features</h3>
          <p className='black mb-3'>Create React App doesnt handle backend logic so you Create React App doesnt handle backend logic so you can use
          it uses Babel and webpack need to know anythinguses Babel and webpack need to know anything about them.
          Babel and webpack need to know anything the hood, it uses Babel and webpack, but you donUnder the hood, it uses Babel and webpack,Under the hood, 
          tit uses Babel and webpacuses Babel and webpack need to know anythingk need to know anything about them.
            Create React uses Babel and webpack need to know anythingApp doesnt handle backend logic so you can 
            use</p>
          <Button variant="warning" className='start_button'>JOIN NOW</Button>
        </div>
        <div className="col-xl-5 col-md-12">
            <img src={benefits} className='CourseMode' alt='benefits'/>
        </div>
      </div>
    </div>

  </>;
}
export default Features
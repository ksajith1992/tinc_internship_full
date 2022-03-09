import React from 'react';
import NaveBar from '../../../Components/NaveBar';

import Button from 'react-bootstrap/Button';



function Banner() {
  return <>

<div className='banner_bg'>
<NaveBar />
<div className="container"> 

  <div className="row mt-5 ">

    <div className="col-sm-6 col-md-6 mt-5">
    <h1 className='pt-5'>Become a professional with TINC Internship</h1>
    <p>Create React App doesn handle backend logic so you can use it with any backend you want. Under the hood, 
      it uses Babel and webpack, but you dont need to know anything about them.</p>

    <Button variant="warning" className='start_button'>GET STARTED</Button>

    </div>
    <div className="col-sm-6 col-md-6"></div>
  </div>
 
</div>

   </div>
  </>;
}

export default Banner;

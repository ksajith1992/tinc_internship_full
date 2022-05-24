import React from 'react';
import NaveBar from '../../../Components/NaveBar';
import Button from 'react-bootstrap/Button';
import {Link} from "react-dom";



function Banner() {
  return <>

<div className='banner_bg'>
<NaveBar />
<div className="container"> 

  <div className="row mt-5 ">

    <div className="col-sm-6 col-md-6 mt-5">
    <h1 className='pt-5'>Become a professional with TINC Internship</h1>
    <p>You can learn how to drive a car from the books with definitions and meanings.But is that enough to drive a car? Here comes the need of practical knowledge and Tincacademy invites you to various academic and non-academic internships that are provided under various departments of our company
by professionals.</p>

    <Button variant="warning" className='start_button'>GET STARTED</Button>

    </div>
    <div className="col-sm-6 col-md-6"></div>
  </div>
 
</div>

   </div>
  </>;
}

export default Banner;

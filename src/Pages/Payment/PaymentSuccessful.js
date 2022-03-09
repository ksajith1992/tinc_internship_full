import React from 'react'; 
import '../MainCss.css'
import '../Home/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


import NaveBar_inner from '../../Components/NaveBar_inner';
import Footer from '../../Components/Footer';

function PaymentSuccessful() {
  return (
    <>
     <div className="row m-0 p-0">
     <div className="col-sm-12 col-md-12  mb-5 p-0">

        <NaveBar_inner />

        </div>


<div className="col-sm-12">

<h4 className='pt-3 center black'>Payment Successful</h4>
<div className='black center mt-'>Your accress to the course TINC BY BEARDMAN is live now.
    Happy learning :)
</div>

<div className="col-sm-12 col-md-12 pt-0">
    <Button variant="warning" className='mt-5 pad'>TAKE ME THERE</Button> <br/>

    </div>
    <div className="col-sm-12 col-md-12 pt-3">
    <Link to="/Home"> <FontAwesomeIcon icon={faArrowLeft} /> Home </Link>

    </div>

</div>        

<div className="col-sm-12 col-md-12  mt-5 p-0">

        <Footer />
        </div>

        </div>
    
 </>
  )
}
export default PaymentSuccessful
import React, {useState} from 'react';
import '../MainCss.css'
import '../Home/Home.css'

import { Link } from 'react-router-dom';
import Otp from './Otp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Login from './Login';


function OtpLogin() {
  return <div>
    <div className="row p-4">

<div className="col-sm-12 col-md-7">
<div className="col-sm-12 Left_Side">

<Link to="/Home"> <FontAwesomeIcon icon={faArrowLeft} /> Home </Link>
<h4 className='pt-3'>Enter the OTP send to registerd phone number/email</h4>

</div>
<div className="col-sm-12">
<Otp />
</div>

</div>

<div className="col-sm-12 col-md-5">
<Login />
</div>


</div>
  </div>;
}

export default OtpLogin;

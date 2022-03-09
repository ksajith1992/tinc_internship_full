import React, {useState} from 'react';
import '../MainCss.css'
import '../Home/Home.css'

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Login from './Login';
import SignupForm from './SignupForm';


function Signup() {
  return <div>
    <div className="row p-4">

<div className="col-sm-12 col-md-7">
<div className="col-sm-12 Left_Side">

<Link to="/Home"> <FontAwesomeIcon icon={faArrowLeft} /> Home </Link>
<h4 className='pt-3'>Let us more about you</h4>

</div>
<div className="col-sm-12 mt-4">
<SignupForm />
</div>

</div>

<div className="col-sm-12 col-md-5">
<Login />
</div>


</div>
  </div>;
}

export default Signup;

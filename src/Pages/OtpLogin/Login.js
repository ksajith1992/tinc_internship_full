import React from 'react';
import logo_footer from '../../Images/logo_white.svg'
import { Link, useNavigate } from 'react-router-dom';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

function Login() {
  const navigate = useNavigate ()
  const initialvalues={
    Phone:'',
  }
 const [data, setData] = useState(initialvalues)
  function ToDashbord(){
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/v1/user/login_otp_sent/',
      data:JSON.stringify(data),
      headers: {
           'Content-Type': 'application/json'
           }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

  function logintotinc (e) {
    setData({
      ...data,
     [ e.target.id]:e.target.value
    });     
  }


console.log(data)
  return <div>
      <div className='loginbox'>
      <img src={logo_footer} className='login_logo mb-4 mt-5' alt='logo'/>

      <div className="row p-4">

      <div className="col-sm-12 col-md-12 pt-5">
<TextField className="TextFieldd white" id="email" type="text" label="Phone Number" onChange={logintotinc}  variant="standard" />
    </div>
    {/* <div className="col-sm-12 col-md-12 pt-3">
<TextField className="TextFieldd white" id="password" label="Password" type="password" onChange={logintotinc}  variant="standard" />
    </div> */}
    <div className="col-sm-12 col-md-12 pt-3 ">
              
                         <input type="checkbox" className="custom-control-input" id="customCheck1" /> 
                         <label className="custom-control-label white p-2" htmlFor="customCheck1">Remember me</label>
                 
              </div>

    <div className="col-sm-12 col-md-12 pt-3">
    <Button onClick={ToDashbord} variant="warning" className='mt-5 pad'>LOGIN</Button> <br/>

    </div>
    <div className="col-sm-12 col-md-12 pt-3">

    <p className="forgot-password white white_center">
    <Link to="/"> Forgot password? </Link>
   
                </p>
    </div>

    


    </div>

      </div>
  </div>;
}

export default Login;

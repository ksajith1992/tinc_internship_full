import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import Button from 'react-bootstrap/Button';
import TextField from '@mui/material/TextField';

function UpiPayment() {
  const navigate = useNavigate ()

  function ToPaymentSuccessful(){
    navigate("/PaymentSuccessful")
  }

  return (
        <div className="row cardPaymentBox cardPaymentBox_fullwid">
      
<div className="col-sm-12 col-md-12 ">
<TextField className="TextFieldd white fullwid_cardPayment mt-2" id="standard-basic" label="UPI ID" variant="standard" />
</div>

<div className="col-sm-12 col-md-12 pt-3">
    <Button onClick={ToPaymentSuccessful} variant="warning" className='mt-5 pad'>Make Payment</Button> <br/>

    </div>
    <div className="col-sm-12 col-md-12 pt-3">

    <p className="white white_center">
    <Link to="/"> Cancel </Link>
   
                </p>
    </div>
    
</div>
  )
}
export default UpiPayment
import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Otp() {
  const navigate = useNavigate ()
const initialState=({
  otp:''
})
const [state, setstate] = useState(initialState)
function eneterotp(e){
    setstate({
      ...state,
      [e.target.id]:e.target.value
    })
}
  function ToSignup(){
    navigate("/Signup")
  }

  
  return (
    <>
      <div className="row p-4 "> 


      <div className="col-sm-12 col-md-12 mt-5 pt-5 resend_button">
      <TextField className="TextFieldd white" id="otp" type="text" label="OTP" variant="standard" required onChange={eneterotp}/>
      </div>
      
       <div className="col-sm-12 col-md-12 resend_button m-0 pt-0">
            <Button onClick={ToSignup} variant="warning" className='mt-5 pad'>VERIFY</Button>
       </div>

       <div className="col-sm-12 col-md-12 resend_button mt-2">
       <Button className='learn_more'> Resend OTP</Button>
       </div>

       <div className="col-sm-12 col-md-12 resend_button mt-1">
       <div className='already_more resend_button'> Already a member ? Login Here  <FontAwesomeIcon icon={faArrowRight} /></div>

       </div>


       
</div>
    </>
  );
}

export default Otp;

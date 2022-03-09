import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import TextField from '@mui/material/TextField';

import { useNavigate } from 'react-router-dom';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

function SignupForm() {
     const navigate = useNavigate ()
     const initialvalues={
          first_name:"",
          last_name:"",
          email:"",
          occupation:"",
          qualification:'',
          location:"",
          mobile_number:"",
          name_of_college:""
     }
    const [data, setData] = useState(initialvalues)
   
     function signuptotinc (e) {
       setData({
         ...data,
        [ e.target.id]:e.target.value
       });     
     }
     
     function ToSignup(){
          console.log(data,'kll')
          axios({
               method: 'post',
               url: 'http://157.245.97.13/api/v1/user/user_registration/',
               data:JSON.stringify(data),
               headers: {
                    'Content-Type': 'application/json'
                    }
             })
             .then(function (response) {
               console.log(response);
             })
             .catch(err=>{
               if(err.request){
                    console.log(err.request)
               }
               if(err.response){
                    console.log(err.response)
               }
             });
     }

  return (
    <>
      <div className="row p-5 pt-5 mt-5">
      <div className="col-sm-12 col-md-6 resend_button">
            <TextField id="first_name" name='first_name' label="First Name"  onChange={signuptotinc} variant="standard" required/>
       </div>
       
       <div className="col-sm-12 col-md-6 resend_button">
            <TextField id="last_name" name='last_name' label="Last Name"  onChange={signuptotinc} variant="standard" required/>
       </div>
       
       <div className="col-sm-12 col-md-6 resend_button">
            <TextField id="email" label="email" name='email'  onChange={signuptotinc} variant="standard" required/>
       </div>
       <div className="col-sm-12 col-md-6 resend_button">
            <TextField id="mobile_number" label="mobile_number" name='mobile_number'  onChange={signuptotinc}  variant="standard" required/>
       </div>
       <div className="col-sm-12 col-md-6 resend_button">
            <TextField id="occupation" label="Occupation" name='occupation'  onChange={signuptotinc}  variant="standard" required/>
       </div>

       <div className="col-sm-12 col-md-6 resend_button">
            <TextField id="qualification" label="qualification" name='qualification'  onChange={signuptotinc}  variant="standard" required/>
       </div>
       
       <div className="col-sm-12 col-md-6 resend_button">
            <TextField id="location" label="location" name='location'  onChange={signuptotinc}  variant="standard" required/>
       </div>
       <div className="col-sm-12 col-md-6 resend_button">
            <TextField id="name_of_college" label="name_of_college" name='name_of_college'  onChange={signuptotinc}  variant="standard" required/>
       </div>
       
       

      
       <div className="col-sm-12 col-md-12 resend_button m-0 pt-5">
            <Button onClick={ToSignup} variant="warning" className='mt-0 pad'>SIGN UP</Button> <br/>

          <div className='already_more resend_button m-4'> Already a member ? Login Here  <FontAwesomeIcon icon={faArrowRight} /></div>
    
       </div>


</div>
    </>
  );
}

export default SignupForm;

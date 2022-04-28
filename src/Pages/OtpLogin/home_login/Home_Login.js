import React from 'react';
import logo_footer from '../../../Images/logo_white.svg'
import { Link, useNavigate } from 'react-router-dom';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import TextField from '@mui/material/TextField';
import axios from '../../../Constants/Axios';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function Home_Login() {
  const navigate = useNavigate ()
  const validationSchema = Yup.object().shape({
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  const initialvalues={
    Phone:'',
  }
 const [data, setData] = useState(initialvalues)
 function logintotinc (e) {
  setData({
    ...data,
   [ e.target.id]:e.target.value
  }); 
  getData();    
}
const [ip, setIP] = useState('');
const getData = async () => {
     const res = await axios.get('https://api.ipify.org/?format=json')
     setIP(res.data)
   }   
  function onSubmit(){
    const formData = new FormData()
    formData.append("phone",data.Phone)
    formData.append("ip_address",ip.ip)
    axios({
      method: 'post',
      url: 'login_otp_sent/',
      data:formData,
      headers: {
           'Content-Type': 'application/json'
           }
    })
    .then(function (response) {
      console.log(response.data.message)
      const otptoken=response.data.data.access_token
      setAlertmsg(response.data.message)
      setMsg('success')
      setOpen(true)
      navigate('/Home_OtpLogin',{state:{token:otptoken}})
      document.getElementById('Phone').value='';
    })
    .catch(err=>{
      if(err.request){
           console.log(err.request)
      }
      if(err.response){
        console.log(err.response)
        setAlertmsg(err.response.data.message_list)
        setMsg('error')
        setOpen(true)
      }
    });
   
}

  function logintotinc (e) {
    setData({
      ...data,
     [ e.target.id]:e.target.value
    });     
  }
  const [open, setOpen] = useState(false);
     const [alertmsg, setAlertmsg] = useState('');
     const [msg, setMsg] = useState('');
     const handleClose = (event, reason) => {
          if (reason === 'clickaway') {
            return;
          }
      
          setOpen(false);
        };



console.log(data)
  return <div>
      <div className='loginbox'>
      <img src={logo_footer} className='login_logo mb-4 mt-5' alt='logo'/>

      <div className="row p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="col-sm-12 col-md-12 pt-5">
<TextField className="TextFieldd white" id="Phone" type="text" label="Mobile Number" onChange={logintotinc}  variant="standard" required/>
    </div>
    {/* <div className="col-sm-12 col-md-12 pt-3">
<TextField className="TextFieldd white" id="password" label="Password" type="password" onChange={logintotinc}  variant="standard" />
    </div> */}
    {/* <div className="col-sm-12 col-md-12 pt-3 ">
              
                         <input type="checkbox" className="custom-control-input" id="customCheck1" /> 
                         <label className="custom-control-label white p-2" htmlFor="customCheck1">Remember me</label>
                 
              </div> */}

    <div className="col-sm-12 col-md-12 pt-3">
    <Button type='submit' variant="warning" className='mt-5 pad'>LOGIN</Button> <br/>

    </div>
    <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
               <Alert onClose={handleClose} severity={msg} sx={{ width: '100%' }}>
               {alertmsg}
               </Alert>
          </Snackbar>
     </Stack>
    </form>
    <div className="col-sm-12 col-md-12 pt-3">

    {/* <p className="forgot-password white white_center">
    <Link to="/"> Forgot password? </Link>
   
                </p> */}
    </div>

    


    </div>

      </div>
  </div>;
}

export default Home_Login;

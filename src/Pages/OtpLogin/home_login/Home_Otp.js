import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';
import axios from '../../../Constants/Axios';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


function Home_Otp() {
  const navigate = useNavigate ()
  const validationSchema = Yup.object().shape({
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
const initialState=({
  otp:''
})
const [state, setstate] = useState(initialState)
function eneterotp(e){
    setstate({
      ...state,
      [e.target.id]:e.target.value
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
          formData.append("otp",state.otp)
          formData.append("ip_address",ip.ip)
          axios({
            method: 'post',
            url: 'login_otp_validate/',
            data:formData,
            headers: {
                 'Content-Type': 'application/json'
                 }
          })
          .then(function (response) {
            setAlertmsg(response.data.message)
            setMsg('success')
            setOpen(true)
            navigate('/Home_OtpLogin')
          })
          .catch(err=>{
            if(err.request){
                 console.log(err.request)
            }
            if(err.response){
              console.log(err.response.data.message_list)
              setAlertmsg(err.response.data.message_list)
              setMsg('error')
              setOpen(true)
            }
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

  
  return (
    <>
      <div className="row p-4 "> 
      <form onSubmit={handleSubmit(onSubmit)}>

      <div className="col-sm-12 col-md-12 mt-5 pt-5 resend_button">
      <TextField className="TextFieldd white" id="otp" type="text" label="OTP" variant="standard" required onChange={eneterotp}/>
      </div>
      
       <div className="col-sm-12 col-md-12 resend_button m-0 pt-0">
            <Button type='submit' variant="warning" className='mt-5 pad'>VERIFY</Button>
       </div>
       </form>
       <div className="col-sm-12 col-md-12 resend_button mt-2">
       {/* <Button className='learn_more' onClick={resendotp}> Resend OTP</Button> */}
       </div>

       <div className="col-sm-12 col-md-12 resend_button mt-1">
       <div className='already_more resend_button'> Already a member ? Login Here  <FontAwesomeIcon icon={faArrowRight} /></div>

       </div>

       <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
               <Alert onClose={handleClose} severity={msg} sx={{ width: '100%' }}>
               {alertmsg}
               </Alert>
          </Snackbar>
     </Stack>
       
</div>
    </>
  );
}

export default Home_Otp;

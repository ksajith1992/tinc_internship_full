import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from '../../../Constants/Axios';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function Home_SignupForm() {
     const navigate = useNavigate ()
     const validationSchema = Yup.object().shape({
      });
      const formOptions = { resolver: yupResolver(validationSchema) };
      const { register, handleSubmit, formState } = useForm(formOptions);
      const { errors } = formState;
     const initialvalues={
          "first_name":"",
          "last_name":"",
          "email":"",
          "occupation":"",
          "qualification":"",
          "location":"",
          "mobile_number":"",
          "name_of_college":""
     }
    const [data, setData] = useState(initialvalues)
   
     function signuptotinc (e) {
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
          formData.append("first_name",data.first_name)
          formData.append("last_name",data.last_name)
          formData.append("email",data.email)
          formData.append("occupation",data.occupation)
          formData.append("qualification",data.qualifiction)
          formData.append("location",data.location)
          formData.append("mobile_number",data.mobile_number)
          formData.append("name_of_college",data.name_of_college)
          formData.append("ip_address",ip.ip)
          axios({
               method: 'post',
               url: 'user_registration/',
               data:formData,
               headers: {
                    'Content-Type': 'application/json'
                    }
             })
             .then(function (response) {
                    setAlertmsg('User registered successfully')
                    setMsg('success')
                    setOpen(true)
                    document.getElementById('first_name').value='';
                    document.getElementById('last_name').value='';
                    document.getElementById('email').value='';
                    document.getElementById('occupation').value='';
                    document.getElementById('qualification').value='';
                    document.getElementById('location').value='';
                    document.getElementById('mobile_number').value='';
                    document.getElementById('name_of_college').value='';

             })
             .catch(err=>{
               if(err.request){
                    console.log(err.request)
               }
               if(err.response){
                    setAlertmsg(err.response.data.message_list.email?err.response.data.message_list.email:err.response.data.message_list.mobile_number?err.response.data.message_list.mobile_number:'Something went wrong!!')
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
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row p-5 pt-5 mt-5">
      <div className="col-sm-12 col-md-6 resend_button">
            <TextField id="first_name" name='first_name' label="First Name"  onChange={signuptotinc} variant="standard" required/>
       </div>
       
       <div className="col-sm-12 col-md-6 resend_button">
            <TextField id="last_name" name='last_name' label="Last Name"  onChange={signuptotinc} variant="standard" required/>
       </div>
       
       <div className="col-sm-12 col-md-6 resend_button">
            <TextField id="email" label="Email" name='email'  onChange={signuptotinc} variant="standard" required/>
       </div>
       <div className="col-sm-12 col-md-6 resend_button">
            <TextField id="mobile_number" label="Mobile Number" name='mobile_number'  onChange={signuptotinc}  variant="standard" required/>
       </div>
       <div className="col-sm-12 col-md-6 resend_button">
            <TextField id="occupation" label="Occupation" name='occupation'  onChange={signuptotinc}  variant="standard" required/>
       </div>

       <div className="col-sm-12 col-md-6 resend_button">
            <TextField id="qualification" label="Qualification" name='qualification'  onChange={signuptotinc}  variant="standard" required/>
       </div>
       
       <div className="col-sm-12 col-md-6 resend_button">
            <TextField id="location" label="Location" name='location'  onChange={signuptotinc}  variant="standard" required/>
       </div>
       <div className="col-sm-12 col-md-6 resend_button">
            <TextField id="name_of_college" label="Name of College" name='name_of_college'  onChange={signuptotinc}  variant="standard" required/>
       </div>
       
       

      
       <div className="col-sm-12 col-md-12 resend_button m-0 pt-5">
            <Button variant="warning" type='submit' className='mt-0 pad'>SIGN UP</Button> <br/>

          <div className='already_more resend_button m-4'> Already a member ? Login Here  <FontAwesomeIcon icon={faArrowRight} /></div>
    
       </div>
       </div>
       </form>
     <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
               <Alert onClose={handleClose} severity={msg} sx={{ width: '100%' }}>
               {alertmsg}
               </Alert>
          </Snackbar>
     </Stack>
    </>
  );
}

export default Home_SignupForm;

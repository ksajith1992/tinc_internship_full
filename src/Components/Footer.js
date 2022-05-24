import  React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';
import logo_footer from '../Images/Logo_dark.svg'
import axios from '../Constants/Axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ScroolUp from '../Components/ScroolUp'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';
import Chat from '../Pages/Chat/Chat';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function Footer() {
     const validationSchema = Yup.object().shape({
      });
      const formOptions = { resolver: yupResolver(validationSchema) };
      const { register, handleSubmit, formState } = useForm(formOptions);
      const { errors } = formState;
      const token=localStorage.getItem('token_intern');
      const initialvalues={
        "name": "",
        "email": "",
        "mobile_number": ""
   }
  const [data, setData] = useState(initialvalues)
 
   function onchange (e) {
     setData({
       ...data,
      [ e.target.id]:e.target.value
     });    
   }
      function onSubmit(){
        console.log(data)
        axios({
          method: 'post',
          url: 'contact/',
          data:data,
          headers:{"Authorization" : `Bearer ${token}`}
        })
          .then(res => {
            setAlertmsg('We will contact you soon!!!')
            setMsg('success')
            setOpen(true)
            document.getElementById('name').value='';
            document.getElementById('mobile_number').value='';
            document.getElementById('email').value='';
          })
          .catch(err=>{
            if(err.request){console.log(err.request)}if(err.response){
              console.log(err.response.data)
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

  return <>
 
<div className="row footer mt-5">



<div className="col-sm-12 col-md-4 col-xl-3 rightside  mb-4">

<h5 className='mt-4 footer_left'>LOCATION </h5>
<div className='mt-4 footer_left'><b>CALICUT | VALAKOM</b></div>

               2nd Floor <br />
                Hilite Business Park<br/>
                Calicut,  Kerala<br/>
               
                <strong>Email:</strong> <br/>
                connect@maverixpro.com<br/>
           
                <strong>Website:</strong> <br/>
                www.maverixpro.com<br/>
                <strong>For details, call:</strong> <br/>
                +91 9745 444 369
           

</div>


<div className="col-sm-12 col-md-4 col-xl-3 rightside">

<h5 className='mt-4 footer_left'>ABOUT US </h5>
<div className="footer_links mt-3">
  <ul>
    <li>  <Link to="/AboutUs"> <FontAwesomeIcon icon={faArrowRight} /> About</Link></li>

{/* <li><Link to="/Services"> <FontAwesomeIcon icon={faArrowRight} /> Services</Link></li> */}

    <li><Link to="/"> <FontAwesomeIcon icon={faArrowRight} /> FAQ</Link></li>
  </ul>
</div>

<div className="footer_links">
<hr/>
<ul>
<li><Link to="/AboutUs"> <FontAwesomeIcon icon={faArrowRight} /> Facebook</Link></li>
<li><Link to="/Services"> <FontAwesomeIcon icon={faArrowRight} /> Instagram</Link></li>
<li><Link to="/Faq"> <FontAwesomeIcon icon={faArrowRight} /> Linkedin</Link></li>
<li><Link to="/Faq"> <FontAwesomeIcon icon={faArrowRight} /> Twitter</Link></li>
</ul>

</div>
</div>

<div className="col-sm-12 col-md-4 col-xl-3 rightside">
<form onSubmit={handleSubmit(onSubmit)}>

<h5 className='mt-4 footer_left'>CONTACT </h5>

<TextField id="name" className="m-2" label="Name" onChange={onchange} variant="standard" />

<TextField id="mobile_number" className="m-2" label="Mobile" onChange={onchange} variant="standard" />

<TextField id="email" className="m-2" label="Email" onChange={onchange} variant="standard" />

<br/>

<Button variant="warning" type='submit' className='start_button'>CONTACT US</Button>
</form>
</div>

<div className="col-sm-12 col-md-4 col-xl-3 rightside">

<h5 className='mt-4 footer_left'>LEGAL </h5>
<div className="footer_links mt-3">

<ul>
<li><Link to="/Privacypolicy"> <FontAwesomeIcon icon={faArrowRight} /> Privacy policy</Link></li>

<li><Link to="/Disclaimer"> <FontAwesomeIcon icon={faArrowRight} /> Disclaimer </Link></li>

<li><Link to="/Termsandconditions"> <FontAwesomeIcon icon={faArrowRight} /> Terms & Conditions</Link></li>

<li><Link to="/Cancelationpolicy"> <FontAwesomeIcon icon={faArrowRight} />Cancelation Policy</Link></li>

<li>
<img src={logo_footer} className='mt-5' alt='logo'/>

</li>
</ul>
</div>
</div>
<ScroolUp />
<Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
               <Alert onClose={handleClose} severity={msg} sx={{ width: '100%' }}>
               {alertmsg}
               </Alert>
          </Snackbar>
     </Stack>
<div className="col-12 m-0 p-0">
<p className=' m-0 p-0'>Copyright 2022 by Refsnes Data. All Rights Reserved.</p>
</div>

</div>


  </>;
}

export default Footer;

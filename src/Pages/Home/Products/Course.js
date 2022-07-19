import React,{useState,useEffect} from 'react';
import NaveBar_inner from '../../../Components/NaveBar_inner';
import 'react-tabs/style/react-tabs.css';
import Footer from '../../../Components/Footer';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../../Home/Course.css';
import ModulesIncluded from './ModulesIncluded';
import Features from './Features';
import Clients from '../Clients/Clients';
import ProductsRating from './ProductsRating';
import { useLocation } from 'react-router-dom';
import axios from '../../../Constants/Axios';
import logo from '../../../Images/Logo_dark.svg';


function Course() { 
  let location = useLocation();
  const navigate = useNavigate ()
  const id=location.state.id;
  const token=localStorage.getItem('token_intern');

  function ToPayment(e){
    const cost=Number(e.target.id)
    if(token){
      axios.get('user_paid/', { headers: {"Authorization" : `Bearer ${token}`} })
      .then(res => {
        if(res.data.message==='user not paid'){
          displayRazorpay()
        }else{
          navigate("/CourseList")
        }  
      })
      .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } });
      // navigate("/Payment")
     
    }else{
      navigate("/Home_Signup")
    }
  }
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get('course_details/'+id+'/')
    .then(res => {
      setData(res.data.data[0]) 
      console.log(res.data.data[0].id,'llll')
      axios({
        method: 'post',
        url: 'payment/'+res.data.data[0].id+'/',
        headers: {"Authorization" : `Bearer ${token}`}
    })
    .then(res => {
       console.log(res.data.data.order.order_payment_id)
       setOrder(res.data.data.order.order_payment_id)
       setAmount(res.data.data.order.order_amount)
       console.log(res.data.data.order.order_amount,'amnt')
    })
    .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } });  
    })
    .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } });   
  },[])
  const [order_id, setOrder] = useState('')
  const[amount, setAmount] = useState('')
  const loadScript =(src)=>{
    return new Promise((resolve)=>{
        const script = document.createElement('script')
        script.src=src
        script.onload=()=>{
            resolve(true)
        }
        script.onerror=()=>{
            resolve(false)
        }
        document.body.appendChild(script)
    })
}
const [Success, setSuccess] = useState([]);
const displayRazorpay= async()=>{
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    if(!res){
        alert('You are offline...Failed to load Razorpay SDK')
        return
    }
    console.log(order_id)
    const options={
        key:"rzp_live_X0UtOWBFN25Ny7",
        currency:"INR",
        amount:Number(amount),
        name:'Internship.tinc.pro',
        order_id:order_id,
        description:"thanks for purchasing",
        image:{logo},
        handler:function(res){
            setSuccess(res);
            successresponse(res);
            console.log(res,'success')
        },
        prefill:{
            name:"Tinc Pro"
        }
    };
    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
}
function successresponse(e){
  console.log(e,'kast')
  const formData = new FormData()
  formData.append("razorpay_payment_id",e.razorpay_payment_id)
  formData.append("razorpay_order_id",e.razorpay_order_id)
  formData.append("razorpay_signature",e.razorpay_signature)
  axios({
      method: 'post',
      url: 'payment_success/',
      data:formData,
      headers: {"Authorization" : `Bearer ${token}`}
  })
  .then(res => {
    console.log(res.data)
      alert(res.data.message)
      navigate('/CourseList')
  })
  .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } }); 
}
  return <>
    <div className="Course_bg"> 
      <NaveBar_inner />
      <div className="row mt-2">
        <div className="col-sm-6 col-md-6 m-5">
          <h1 className='pt-5 black'>{data.title}</h1>
          <p className='black'>{data.module_description}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          <Button  onClick={ToPayment} variant="warning" id={data.price} className='start_button'>ENROLL NOW</Button>
        </div>
        <div className="col-sm-4 col-md-4 m-5 pt-5">
          <h5 className='CourseMode_side_right'> <ProductsRating />  3214 Enrollments</h5> <br/>    
          <h4 className='CourseMode_side strike'> INR {data.price+3000}</h4><br/>
          <h1 className='blue_side'>INR {data.price}</h1><br/>
        </div>
      </div>
      {/* <ModulesIncluded />

<Features />

<Clients /> */}

<Footer />
</div>
  </>;
}


export default Course
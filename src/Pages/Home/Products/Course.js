import React,{useState,useEffect} from 'react';
import NaveBar_inner from '../../../Components/NaveBar_inner';
import 'react-tabs/style/react-tabs.css';
import Footer from '../../../Components/Footer';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import '../../Home/Course.css'
import ModulesIncluded from './ModulesIncluded';
import Features from './Features';
import Clients from '../Clients/Clients';

import ProductsRating from './ProductsRating';
import { useLocation } from 'react-router-dom';
import axios from '../../../Constants/Axios'


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
          navigate("/Payment",{state:{id:id}})
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
    console.log(token)
    axios.get('course_details/'+id+'/')
    .then(res => {
      console.log(res.data.data)
      setData(res.data.data[0]) 
      paymentorder()  
    })
    .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } });   
  },[])
  function paymentorder(){
    console.log(data,'data')
    axios({
      method: 'post',
      url: 'payment/'+data.id+'/',
      headers: {"Authorization" : `Bearer ${token}`}
  })
  .then(res => {
     console.log(res)
  })
  .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } }); 
  }
console.log(data,'jop')
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
 
</div>

<ModulesIncluded />

<Features />

<Clients />

<Footer />
  </>;
}


export default Course
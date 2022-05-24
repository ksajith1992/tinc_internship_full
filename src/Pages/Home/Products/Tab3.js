import React,{useState,useEffect} from 'react';
import axios from '../../../Constants/Axios';
import { useNavigate } from 'react-router-dom';
import '../Home.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import ProductsRating from './ProductsRating';

function Technology() {
  const navigate = useNavigate ()
  const token=localStorage.getItem('token_intern');

  // function ToPayment(){
  //   console.log(token)
  //   if(token){
  //     axios.get('user_paid/', { headers: {"Authorization" : `Bearer ${token}`} })
  //     .then(res => {
  //       if(res.data.message==='user not paid'){
  //         navigate("/Payment",{state:{product_id:data.id}})
  //       }else{
  //         navigate("/CourseList")
  //       }  
  //     })
  //     .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } });
  //     // navigate("/Payment")
     
  //   }else{
  //     navigate("/Home_Signup")
  //   }
  // }

  function ToCourse(e){
    navigate("/Course",{state:{id:e.target.id}})
  }
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get('products/')
      .then(res => {
        axios.get('products_details/'+res.data.data[2].id+'/')
          .then(res => {
            setData(res.data.data) 
            console.log(res.data.data)  
          })
          .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } });
        })   
      .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } });
  },[])
  return <>



<div className="row">
{data.map((obj)=>
<div className="col-sm-12 col-md-4 col-lg-3 mt-2" key={obj.id}>
<Card className='card_product'>

  <Card.Body style={{minWidth:1000}}>
    <Card.Title className='black' style={{maxWidth:300}}>{obj.title}
    </Card.Title>
    <Card.Subtitle className="mb-2 text-muted"><ProductsRating />2457 Enrollments</Card.Subtitle>
    <Card.Text className='black mg_top text-muted'>
    {obj.module_description}
    </Card.Text>
   
  </Card.Body>

<div className="bg_yellow">
  <div className="row p-2 ">
    <div className="col-sm-6 bg_yellow_center"><Button variant="warning" className=''> <FontAwesomeIcon icon={faRupeeSign} />{obj.price}</Button></div>
    <div className="col-sm-6 bg_yellow_center"><Button id={obj.id}  onClick={ToCourse} variant="warning" className=''>ENROLL NOW</Button></div>
</div>

</div>
</Card>

</div>
)}




</div>

     


  </>;
}

export default Technology;

import React,{useState,useEffect} from 'react';
import 'react-tabs/style/react-tabs.css';
import axios from '../../../Constants/Axios'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import ProductsRating from './ProductsRating';

function ProductCard() {
  const navigate = useNavigate ()
  const token=localStorage.getItem('token');

  function ToPayment(){
    if(token){
      navigate("/Payment")
     
    }else{
      navigate("/Home_Signup")
    }
  }

 

  function ToCourse(){
    navigate("/Course")
  }
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get('products/')
      .then(res => {
        setData(res.data.data)
        axios.get('products_details/'+res.data.data[0].id+'/')
          .then(res => {
            setData(res.data.data)   
          })
          .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } });
        })   
      .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } });
  },[])
  return <>



<div className="row">

{data.map((obj)=>
<div className="col-sm-12 col-md-5 col-lg-6 mt-2" key={obj.title}>
<Card className='card_product'>

  <Card.Body>
    <Card.Title className='black'>{obj.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"> <ProductsRating /> 3214 Enrollments</Card.Subtitle>
    <Card.Text className='black mg_top'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button onClick={ToCourse}> Learn More <FontAwesomeIcon icon={faArrowRight} /></Button>
  </Card.Body>

<div className="bg_yellow">
  <div className="row p-2 ">
    <div className="col-sm-6 bg_yellow_center"><Button  variant="warning" className=''> <FontAwesomeIcon icon={faRupeeSign} />{obj.price}</Button></div>
    <div className="col-sm-6 bg_yellow_center"><Button  onClick={ToPayment} variant="warning" className=''>JOIN NOW</Button></div>
</div>

</div>
</Card>

</div>
)}

</div>

     


  </>;
}

export default ProductCard;

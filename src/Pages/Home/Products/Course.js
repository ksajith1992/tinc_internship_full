import React from 'react';
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

function Course() { 

 const navigate = useNavigate ()

  function ToPayment(){
    navigate("/Payment")
  }

  return <>

<div className="Course_bg"> 
<NaveBar_inner />

  <div className="row mt-2">

    <div className="col-sm-6 col-md-6 m-5">
    <h1 className='pt-5 black'>Summer Internship for BBA Students</h1>
    <p className='black'>Create React App doesn handle backend logic so you can use it with any backend you want. Under the hood, 
      it uses Babel and webpack, but you dont need to know anything about them.</p>

    <Button  onClick={ToPayment} variant="warning" className='start_button'>JOIN NOW</Button>

    </div>

    <div className="col-sm-4 col-md-4 m-5 pt-5">

    <h5 className='CourseMode_side_right'> <ProductsRating />  3214 Enrollments</h5> <br/>
    
      <h4 className='CourseMode_side strike'> INR 18,000</h4><br/>
      <h1 className='blue_side'>INR 12,500</h1><br/>

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
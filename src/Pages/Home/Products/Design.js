import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'

function Design() {
  const navigate = useNavigate ()

  function ToPayment(){
    navigate("/Payment")
  }

  function ToCourse(){
    navigate("/Course")
  }


  return <>



<div className="row">

<div className="col-sm-12 col-md-4 mt-3">
<Card className='card_product'>

  <Card.Body>
    <Card.Title className='black'>UI Designing</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">2457 Enrollments</Card.Subtitle>
    <Card.Text className='black mg_top'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button onClick={ToCourse}> Learn More <FontAwesomeIcon icon={faArrowRight} /></Button>
  </Card.Body>

<div className="bg_yellow">
  <div className="row p-2 ">
    <div className="col-sm-6 bg_yellow_center"><Button  onClick={ToPayment} variant="warning" className=''> <FontAwesomeIcon icon={faRupeeSign} /> 12000</Button></div>
    <div className="col-sm-6 bg_yellow_center"><Button  onClick={ToPayment} variant="warning" className=''>JOIN NOW</Button></div>
</div>

</div>
</Card>

</div>


<div className="col-sm-12 col-md-4 mt-3">
<Card className='card_product'>

  <Card.Body>
    <Card.Title className='black'>UI/UX </Card.Title>
    <Card.Subtitle className="mb-2 text-muted">457 Enrollments</Card.Subtitle>
    <Card.Text className='black mg_top'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button onClick={ToCourse}> Learn More <FontAwesomeIcon icon={faArrowRight} /></Button>
  </Card.Body>

<div className="bg_yellow">
  <div className="row p-2 ">
    <div className="col-sm-6 bg_yellow_center"><Button  onClick={ToPayment} variant="warning" className=''> <FontAwesomeIcon icon={faRupeeSign} /> 12000</Button></div>
    <div className="col-sm-6 bg_yellow_center"><Button  onClick={ToPayment} variant="warning" className=''>JOIN NOW</Button></div>
</div>

</div>
</Card>

</div>


<div className="col-sm-12 col-md-4 mt-3">
<Card className='card_product'>

  <Card.Body>
    <Card.Title className='black'>Internship for MobileApp</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">498 Enrollments</Card.Subtitle>
    <Card.Text className='black mg_top'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button onClick={ToCourse}> Learn More <FontAwesomeIcon icon={faArrowRight} /></Button>
  </Card.Body>

<div className="bg_yellow">
  <div className="row p-2 ">
    <div className="col-sm-6 bg_yellow_center"><Button  onClick={ToPayment} variant="warning" className=''> <FontAwesomeIcon icon={faRupeeSign} /> 12000</Button></div>
    <div className="col-sm-6 bg_yellow_center"><Button  onClick={ToPayment} variant="warning" className=''>JOIN NOW</Button></div>
</div>

</div>
</Card>

</div>


</div>

     


  </>;
}


export default Design;

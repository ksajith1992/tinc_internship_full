import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'

function Stocks() {
  return <>



<div className="row">

<div className="col-sm-12 col-md-4 mt-3">
<Card className='card_product'>

  <Card.Body>
    <Card.Title className='black'>Stock Pics</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">2568 Enrollments</Card.Subtitle>
    <Card.Text className='black mg_top'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button> Learn More <FontAwesomeIcon icon={faArrowRight} /></Button>
  </Card.Body>

<div className="bg_yellow">
  <div className="row p-2 ">
    <div className="col-sm-6 bg_yellow_center"><Button variant="warning" className=''> <FontAwesomeIcon icon={faRupeeSign} /> 20000</Button></div>
    <div className="col-sm-6 bg_yellow_center"><Button variant="warning" className=''>JOIN NOW</Button></div>
</div>

</div>
</Card>

</div>


<div className="col-sm-12 col-md-4 mt-3">
<Card className='card_product'>

  <Card.Body>
    <Card.Title className='black'>Advenced Charts  </Card.Title>
    <Card.Subtitle className="mb-2 text-muted">124 Enrollments</Card.Subtitle>
    <Card.Text className='black mg_top'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button> Learn More <FontAwesomeIcon icon={faArrowRight} /></Button>
  </Card.Body>

<div className="bg_yellow">
  <div className="row p-2 ">
    <div className="col-sm-6 bg_yellow_center"><Button variant="warning" className=''> <FontAwesomeIcon icon={faRupeeSign} /> 10000</Button></div>
    <div className="col-sm-6 bg_yellow_center"><Button variant="warning" className=''>JOIN NOW</Button></div>
</div>

</div>
</Card>

</div>


<div className="col-sm-12 col-md-4 mt-3">
<Card className='card_product'>

  <Card.Body>
    <Card.Title className='black'>Internship for Trading </Card.Title>
    <Card.Subtitle className="mb-2 text-muted">2489 Enrollments</Card.Subtitle>
    <Card.Text className='black mg_top'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button> Learn More <FontAwesomeIcon icon={faArrowRight} /></Button>
  </Card.Body>

<div className="bg_yellow">
  <div className="row p-2 ">
    <div className="col-sm-6 bg_yellow_center"><Button variant="warning" className=''> <FontAwesomeIcon icon={faRupeeSign} /> 7500</Button></div>
    <div className="col-sm-6 bg_yellow_center"><Button variant="warning" className=''>JOIN NOW</Button></div>
</div>

</div>
</Card>

</div>


</div>

     


  </>;
}

export default Stocks;

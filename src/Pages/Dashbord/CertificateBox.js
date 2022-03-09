import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function CertificateBox() {
  return <>


<div className="row">

<div className="col-sm-12 col-md-4 p-1">
<Card className='card_product'>

  <Card.Body>
  <Card.Title className='black'>Python Programming</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">258 Enrollments</Card.Subtitle>
    <Card.Text className='black '>
    <h6 class="black mt-5 pt-3 center">Successfully Completed  <FontAwesomeIcon icon={faCheck} /> </h6>

    </Card.Text>


  </Card.Body>
  <div className="bg_yellow">
<Button className='fullwid buttonRadius btn-warning'> DOWNLOAD CERTIFICATE   <FontAwesomeIcon icon={faDownload} />  </Button>

</div>
</Card>

</div>


<div className="col-sm-12 col-md-4 p-1">
<Card className='card_product'>

  <Card.Body>
  <Card.Title className='black'>Adanced PHP </Card.Title>
    <Card.Subtitle className="mb-2 text-muted">258 Enrollments</Card.Subtitle>
    <Card.Text className='black '>
    <h6 class="black mt-5 pt-3 center">Successfully Completed  <FontAwesomeIcon icon={faCheck} /> </h6>

    </Card.Text>


  </Card.Body>
  <div className="bg_yellow">
<Button className='fullwid buttonRadius btn-warning'> DOWNLOAD CERTIFICATE   <FontAwesomeIcon icon={faDownload} />  </Button>

</div>
</Card>

</div>


<div className="col-sm-12 col-md-4 p-1">
<Card className='card_product'>

  <Card.Body>
  <Card.Title className='black'>Summer Internship for</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">258 Enrollments</Card.Subtitle>
    <Card.Text className='black '>
    <h6 class="black mt-5 pt-3 center">You are almost here<FontAwesomeIcon icon={faCheck} /> </h6>

    </Card.Text>


  </Card.Body>
  <div className="bg_yellow">
<Button className='fullwid buttonRadius btn-secondary'> DOWNLOAD CERTIFICATE   <FontAwesomeIcon icon={faDownload} />  </Button>

</div>

</Card>

</div>




</div>

     


  </>;
}


export default CertificateBox


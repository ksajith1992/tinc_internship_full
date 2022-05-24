import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import axios from '../../Constants/Axios'; 

function CertificateBox() {
  const token=localStorage.getItem('token_intern');
  const [data, setData] = useState([]);
  console.log(token)
  useEffect(() => {
    axios({
      method: 'post',
      url: 'certificate/',
      headers:{"Authorization" : `Bearer ${token}`}
    })
			.then(res => {
			setData(res.data.data);
			})
			.catch(err=>{
        if(err.request){console.log(err.request)}if(err.response){
          console.log(err.response.data)
          setData(err.response.data)
          }
      });
  },[])
  return <>


<div className="row">

<div className="col-sm-12 col-md-4 p-1">
<Card className='card_product'>

  <Card.Body>
  <Card.Title className='black'>{data.data?data.data.course:''}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{data.data?data.data.enroll:''}</Card.Subtitle>
    <Card.Text className='black '>
    <h6 className="black mt-5 pt-3 center">{data.message}<FontAwesomeIcon icon={faCheck} /> </h6>

    </Card.Text>


  </Card.Body>
  <div className="bg_yellow">
<Button className='fullwid buttonRadius btn-warning' disabled={data.status===400?true:false}> DOWNLOAD CERTIFICATE   <FontAwesomeIcon icon={faDownload} />  </Button>

</div>
</Card>

</div>








</div>

     


  </>;
}


export default CertificateBox


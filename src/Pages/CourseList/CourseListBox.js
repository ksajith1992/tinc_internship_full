import React from 'react';
import 'react-tabs/style/react-tabs.css';
import { useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import axios from '../../Constants/Axios';

function CourseListBox() {
  const navigate = useNavigate ()
  const token=localStorage.getItem('token');
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('purchased_course/' , { headers: {"Authorization" : `Bearer ${token}`} })
			.then(res => {
                setData(res.data)			
			})
			.catch((error) => {
			console.log(error)
			})
  },[])
  console.log(data,'jkkknk')

  function ToPayment(){
    navigate("/Payment")
  }

  function ToCourse(){
    navigate("/Course")
  }


  return <>



<div className="row">

    <div className="col-12 center">
        <h4 className='center'>My Course List</h4>
    </div>

    <div className="col-sm-12 col-md-4 mt-3">
        <Card className='CourseListBox'>
            <Card.Body>
                <Card.Title className='black'>Python Programming</Card.Title>
                <Card.Text className='black mg_top'>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
        `   <div className="">
                <div className="row p-2 ">
                    <Button onClick={ToCourse}> Start Course <FontAwesomeIcon icon={faArrowRight} /></Button>
                </div>`
            </div>
        </Card>
    </div>

</div>

     


  </>;
}


export default CourseListBox
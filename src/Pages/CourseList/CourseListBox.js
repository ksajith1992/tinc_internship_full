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
  const token=localStorage.getItem('token_intern');
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('purchased_course/' , { headers: {"Authorization" : `Bearer ${token}`} })
			.then(res => {
                setData(res.data.data)			
			})
			.catch((error) => {
			console.log(error)
			})
  },[])

  function ToCourse(e){
    navigate("/Dashbord",{state:{id:e.target.id}})
  }


  return <>



<div className="row">

    <div className="col-12 center">
        <h4 className='center'>My Course List</h4>
    </div>
  {data.map((obj)=>
    <div className="col-sm-12 col-md-4 mt-3">
        {/* {data.map((obj)=> */}
        <Card className='CourseListBox'>
            <Card.Body>
                <Card.Title className='black'>{obj.title}</Card.Title>
                <Card.Text className='black mg_top'>
                    {obj.content}
                </Card.Text>
            </Card.Body>
        `   <div className="">
                <div className="row p-2 ">
                    <Button onClick={ToCourse} id={obj.id}> Start Course <FontAwesomeIcon icon={faArrowRight} /></Button>
                </div>`
            </div>
        </Card>
    </div>)}

</div>

     


  </>;
}


export default CourseListBox
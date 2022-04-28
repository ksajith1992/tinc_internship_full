import React, { useRef } from "react";
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from '../../Constants/Axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faArchive } from '@fortawesome/free-solid-svg-icons'

function TaskBox() {
  const token=localStorage.getItem('token');
  const [data, setData] = useState([]);
  const fileRef = useRef();
  const handleChange = (e) => {
    const [file] = e.target.files;
    console.log(file);
  };
  useEffect(() => {
    axios.get('user_task/' , { headers: {"Authorization" : `Bearer ${token}`} })
			.then(res => {
			setData(res.data.data);
			})
			.catch((error) => {
			console.log(error)
			})
  },[])

  return(
  <>
  {data.map((obj)=>
<div className="row  mt-5 TaskBg">
  <div className="col-sm-12 col-md-6 p-5 left">
    <p class="black"></p>
    <h5 class="black">{obj.title}</h5>
    <p className='fullwid gray'>Due Date : {obj.expired_date}&nbsp;{obj.expired_time}</p>
  </div>
  <div className="col-sm-12 col-md-6 p-5 right_side">
    <Button  type="file" id="myFile" name="filename" className='buttonRadius' onClick={() => fileRef.current.click()}>
      <FontAwesomeIcon icon={faPlus} />  Uplord File
    </Button>   
    <input
      ref={fileRef}
      onChange={handleChange}
      multiple={false}
      type="file"
      hidden
    />
  </div>
  <div className="row">
    <div className="col-sm-12 col-md-12 p-5 pt-1 left">
      <p className='black'>{obj.description}</p>
    </div>
    <div className="col-sm-12 col-md-4 mt-1 mb-1">
      <Button className='fullwid buttonRadius taskButton'> Task1.pdf  <FontAwesomeIcon icon={faArchive} /> </Button>
    </div> 
    <div className="col-sm-12 col-md-12 mt-5 ">
      <Button className='fullwid buttonRadius btn-warning'> SUBMIT TASK </Button>
    </div>
  </div>
</div>)}
</>
  )}


export default TaskBox;


import React, { useRef } from "react";
import { useState,useEffect } from 'react';
import axios from '../../Constants/Axios';
import Button from 'react-bootstrap/Button';
import ScoreBar from "./ScoreBar";
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import LinearProgressWithLabel from "./ScoreBar";

function Score() {
  const token=localStorage.getItem('token_intern');
  const [data, setData] = useState([]);
  const [taskdta, setDatatsk] = useState([]);
  const fileRef = useRef();
  const handleChange = (e) => {
    const [file] = e.target.files;
    console.log(file);
  };
  const initialvalues=[{
    "id": "",
    "task": "",
    "task_name": "",
    "admin": "",
    "user": "",
    "score": '',
    "description": "valuation under pending",
    "comments": "Complete your task",
    "created_at": ""
  }]
  useEffect(() => {
    axios.get('verify_score/' , { headers: {"Authorization" : `Bearer ${token}`} })
			.then(res => {
        if(res.data.message==='Score'){
          setData(res.data.data)
        }else if(res.data.message==='valuation under pending'){
          setData( initialvalues)
        }
			
			})
			.catch((error) => {
			console.log(error)
			})
  },[])
  return <>

{data.map((obj)=>
<div className="row TaskBg">

<div className="col-sm-12 col-md-6 p-5 left">

<p className="black"></p>

<h5 className="black">{obj.task_name?obj.task_name:''}</h5>
{/* <p className='fullwid gray'>Due Date : 15 May 2022 10:11 am </p> */}

</div>

<div className="col-sm-12 col-md-6 p-5 right_side">
    <h5 className="black">{obj.score?'Total score :'+obj.score+'out of 100':''}</h5>
</div> 

<div className="row ">

<div className="col-sm-12 col-md-12 p-5 pt-1 left">
    <p className='black'>{obj.description?obj.description:obj.message}</p>
</div>

<div className="col-sm-12 col-md-4  p-5 pt-1 pb-1 mb-1">
    <p className='fullwid gray'>Mentor comments</p>
</div> 

<div className="col-sm-12 col-md-12 p-5 pt-1 left">
<p className='black'>{obj.description} </p>
</div>

<div className="col-sm-12 col-md-12 p-5 pt-1 left">
  <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={obj.score} />
    </Box>
</div>

</div>


</div>
)}


  </>;
}


export default Score

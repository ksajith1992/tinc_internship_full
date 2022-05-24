import React, { Component,useState,useEffect } from 'react';
import { Chart } from "react-google-charts";
import axios from '../../Constants/Axios';

function ProgressChart(probs) {
  const [data, setData] = useState([])
  const [user, setUser] = useState([])
  const token=localStorage.getItem('token_intern');
  const course_id = probs.items;
  useEffect(()=>{
    axios.get('user_details/', { headers: {"Authorization" : `Bearer ${token}`} })
    .then(res => {
      setUser(res.data.data[0])
      console.log('res',res.data.data[0])
    })
    .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } });
    const formData = new FormData()
    formData.append("course_id",course_id)
    axios({
      method: 'post',
      url: 'graph_data/',
      data:formData,
      headers: {"Authorization" : `Bearer ${token}`}
    })
      .then(res => {  
        console.log(res.data.data,'dsfsf')      
        setData(res.data.data)
        // setLebel(res.data.data["labels"])     
      })   
      .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } });
  },[])  
  const options = {
    chart: {
      title: "Course Performance",
      subtitle: "Attendance, Presentation, and Task Score on weekly",
    },
  }; 
  return (
    <div className='row'>
      <div className="row p-4">
      <div className="col-sm-12 col-md-12 p-5">
        <h1 className='yellow_head'>Hi, {user.first_name}</h1>
        <div className='dashbord_head_p mt-4'>See your progress here</div>
      </div>
    </div>
      <div className='col-lg-2 col-md-2'></div>
      <div className='col-lg-8 col-md-8'>
      <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
      </div>
      <div className='col-lg-2 col-md-2'></div>
    </div>
    
  )
}

export default ProgressChart
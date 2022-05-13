import React, { Component,useState,useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import * as faker from 'faker';
import Chart from 'chart.js/auto'
import axios from '../../Constants/Axios';

function ProgressChart() {
  const [data, setData] = useState([])
  const token=localStorage.getItem('token_intern');
  const course_id = '66755d91-de28-4495-bdea-68b17169462d';
  useEffect(()=>{
    const formData = new FormData()
    formData.append("course_id",course_id)
    axios({
      method: 'post',
      url: 'login_otp_sent/',
      data:formData,
      headers: {"Authorization" : `Bearer ${token}`}
    })
      .then(res => {
      console.log(res.data,'lllhvhb')
        })   
      .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } });
  },[])
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Total score:85',
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','august','september','november','december']
 
  return (
    <div className='row'>
      <div className='col-lg-2 col-md-2'></div>
      <div className='col-lg-8 col-md-8'>
        <Bar options={options} data={data} />;
      </div>
      <div className='col-lg-2 col-md-2'></div>
    </div>
    
  )
}

export default ProgressChart
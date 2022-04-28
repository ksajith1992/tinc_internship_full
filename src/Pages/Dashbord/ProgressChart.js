import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import * as faker from 'faker';
import Chart from 'chart.js/auto'

function ProgressChart() {
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
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','august','september','november','december'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Attendance',
        data: labels.map(() => faker.datatype.number(100 )),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Task Score',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Presentation',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: 'rgba(188, 162, 197, 0.5)',
      },
    ],
  };
 
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
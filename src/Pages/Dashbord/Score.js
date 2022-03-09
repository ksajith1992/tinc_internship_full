import React, { useRef } from "react";
import Button from 'react-bootstrap/Button';
import ScoreBar from "./ScoreBar";

function Score() {
  const fileRef = useRef();

  const handleChange = (e) => {
    const [file] = e.target.files;
    console.log(file);
  };


  return <>


<div className="row TaskBg">

<div className="col-sm-12 col-md-6 p-5 left">

<p class="black"></p>

<h5 class="black">Task Name</h5>
<p className='fullwid gray'>Due Date : 15 May 2022 10:11 am </p>

</div>

<div className="col-sm-12 col-md-6 p-5 right_side">
    <h5 class="black">Total score : 80 out of 100</h5>
</div> 

<div className="row ">

<div className="col-sm-12 col-md-12 p-5 pt-1 left">
    <p className='black'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
</div>

<div className="col-sm-12 col-md-4  p-5 pt-1 pb-1 mb-1">
    <p className='fullwid gray'>Mentor comments</p>
</div> 

<div className="col-sm-12 col-md-12 p-5 pt-1 left">
<p className='black'>- It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
<p className='black'>- But also the leap into electronic typesetting, remaining essentially unchanged. </p>
</div>

<div className="col-sm-12 col-md-12 p-5 pt-1 left">
    <ScoreBar />
</div>

<div className="col-sm-12 col-md-12 mt-5 ">
  <Button className='fullwid buttonRadius btn-warning'> SUBMIT TASK </Button>
</div> 

</div>


</div>



  </>;
}


export default Score

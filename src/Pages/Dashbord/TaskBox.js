import React, { useRef } from "react";
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faArchive } from '@fortawesome/free-solid-svg-icons'

function TaskBox() {
  const fileRef = useRef();

  const handleChange = (e) => {
    const [file] = e.target.files;
    console.log(file);
  };


  return <>


<div className="row  mt-5 TaskBg">

<div className="col-sm-12 col-md-6 p-5 left">

<p class="black"></p>

<h5 class="black">Task Name</h5>
<p className='fullwid gray'>Due Date : 15 May 2022 10:11 am </p>

</div>

<div className="col-sm-12 col-md-6 p-5 right_side">

<Button  type="file" id="myFile" name="filename" className='buttonRadius' onClick={() => fileRef.current.click()}>  <FontAwesomeIcon icon={faPlus} />  Uplord File</Button>
   
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
<p className='black'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
</div>

<div className="col-sm-12 col-md-4 mt-1 mb-1">
  <Button className='fullwid buttonRadius taskButton'> Task1.pdf  <FontAwesomeIcon icon={faArchive} /> </Button>
</div> 

<div className="col-sm-12 col-md-4 mt-1 mb-1">
  <Button className='fullwid buttonRadius taskButton'> Task1.pdf  <FontAwesomeIcon icon={faArchive} /> </Button>
</div> 

<div className="col-sm-12 col-md-4 mt-1 mb-1">
  <Button className='fullwid buttonRadius taskButton'> Task1.pdf  <FontAwesomeIcon icon={faArchive} /> </Button>
</div> 

<div className="col-sm-12 col-md-4 mt-1 mb-1">
  <Button className='fullwid buttonRadius taskButton'> Task2.pdf  <FontAwesomeIcon icon={faArchive} /> </Button>
</div> 

<div className="col-sm-12 col-md-4 mt-1 mb-1">
  <Button className='fullwid buttonRadius taskButton'> Task3.pdf  <FontAwesomeIcon icon={faArchive} /> </Button>
</div> 

<div className="col-sm-12 col-md-12 mt-5 ">
  <Button className='fullwid buttonRadius btn-warning'> SUBMIT TASK </Button>
</div> 

</div>


</div>



  </>;
}


export default TaskBox;


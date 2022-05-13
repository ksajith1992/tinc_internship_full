import React, { useRef } from "react";
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from '../../Constants/Axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Upload } from "@mui/icons-material";
import '../MainCss.css'

function TaskBox() {
  const token=localStorage.getItem('token_intern');
  const [data, setData] = useState([]);
  const [upload, setUpload] = useState([]);
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
      axios.get('user_uploadfile/', { headers: {"Authorization" : `Bearer ${token}`} })
			.then(res => {
        console.log(res.data.data,'klkll')
			setUpload(res.data.data);
			})
			.catch((error) => {
			console.log(error)
			})
  },[])
function Uploadfile(e){
  const formData = new FormData()
  formData.append("task",e.target.id)
  formData.append("file",e.target.files[0])
  axios({
    method: 'post',
    url: 'user_uploadfile/',
    data:formData,
    headers:{"Authorization" : `Bearer ${token}`}
  })
  .then(function (response) {
    console.log(response.data,'upload')
    axios.get('user_uploadfile/', { headers: {"Authorization" : `Bearer ${token}`} })
			.then(res => {
        console.log(res.data.data,'klkll')
			setUpload(res.data.data);
			})
			.catch((error) => {
			console.log(error)
			})

  })
  .catch(err=>{
    if(err.request){console.log(err.request)}if(err.response){console.log(err.response)}
  });
}
function deletefunction(e){
  axios.delete('user_uploadfile/'+e.target.id+'/', { headers: {"Authorization" : `Bearer ${token}`} })
			.then(res => {
        window.location.reload(false);
			})
			.catch((error) => {
			console.log(error)
			})
}
  return(
  <>
  {data.map((obj)=>
<div className="row  mt-5 TaskBg" key={obj.id}>
  <div className="col-sm-12 col-md-6 p-5 left">
    <p class="black"></p>
    <h5 class="black">{obj.title}</h5>
    <p className='fullwid gray'>Due Date : {obj.expired_date}&nbsp;{obj.expired_time}</p>
  </div>
  <div className="col-sm-12 col-md-6 p-5 right_side">
    {/* <Button  type="file" id={obj.id} name="filename" >
      <FontAwesomeIcon icon={faPlus} />  Uplord File
    </Button>   
    <input
      ref={fileRef}
      onChange={handleChange}
      multiple={false}
      type="file"
      hidden
  /> */}
    <input type="file" onChange={Uploadfile} name="blog_thumbnail" id={obj.id} className="dropify" data-max-file-size="2M" required="" data-height="100"/>
  </div>
  <div className="row">
    <div className="col-sm-12 col-md-12 p-5 pt-1 left">
      <p className='black'>{obj.description}</p>
    </div>
    {upload.map((obj)=>
    <div className="col-sm-12 col-md-4 mt-1 mb-1" key={obj.id}>
      <Button className='fullwid buttonRadius taskButton' id={obj.id} onClick={deletefunction}> {obj.task_name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faTrash}/> </Button>
    </div> )}
    {/* <div className="col-sm-12 col-md-12 mt-5 ">
      <Button className='fullwid buttonRadius btn-warning'> SUBMIT TASK </Button>
    </div> */}
  </div>
</div>)}
</>
  )}


export default TaskBox;


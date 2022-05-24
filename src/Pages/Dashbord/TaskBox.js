import React, { useRef } from "react";
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from '../../Constants/Axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Upload } from "@mui/icons-material";
import URL from '../../Constants/Constants'
import '../MainCss.css'
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

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
			setData(res.data.data)
      console.log(res.data.data,'kjkkkkkkkk')
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
    setAlertmsg('Upload Task Successfully')
    setMsg('success')
    setOpen(true)
    axios.get('user_task/' , { headers: {"Authorization" : `Bearer ${token}`} })
    .then(res => {
    setData(res.data.data)
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
  console.log(e.target.id,'hhhhhhhh')
  axios.delete('user_uploadfile/'+e.target.id+'/', { headers: {"Authorization" : `Bearer ${token}`} })
			.then(res => {
        window.location.reload(false);
			})
			.catch(err=>{
        if(err.request){console.log(err.request)}if(err.response){console.log(err.response)}
      });
}
const [open, setOpen] = useState(false);
const [alertmsg, setAlertmsg] = useState('');
const [msg, setMsg] = useState('');
const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return(
  <>
  {data.map((obj)=>
<div className="row  mt-5 TaskBg" key={obj.id}>
  <div className="col-sm-12 col-md-6 p-5 left">
    <p className="black"></p>
    <h5 className="black">{obj.title}</h5>
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
  {obj.file.map((object)=>
    <div className="col-sm-12 col-md-4 mt-1 mb-1" key={object.id}>
      <Button className='fullwid buttonRadius taskButton' id={object.id} onClick={deletefunction} > {object.filename}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon id={object.id} onClick={deletefunction} icon={faTrash}/> </Button>
    </div>)} 
  </div>
</div>)}
<Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
               <Alert onClose={handleClose} severity={msg} sx={{ width: '100%' }}>
               {alertmsg}
               </Alert>
          </Snackbar>
     </Stack>
</>
  )}


export default TaskBox;


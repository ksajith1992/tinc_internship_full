import React from 'react'; 
import '../MainCss.css'
import '../Home/Home.css'
import '../Home/Course.css'
import 'bootstrap/dist/css/bootstrap.min.css';



import NaveBar_inner from '../../Components/NaveBar_inner';
import Footer from '../../Components/Footer';
import CourseListBox from './CourseListBox';

function CourseList() {
  return (
    <>
     <div className="row m-0 p-0">
     <div className="col-sm-12 col-md-12  mb-5 p-0">

        <NaveBar_inner />

        </div>
        <div className="col-sm-12 col-md-12  mt-0 p-0">

        <CourseListBox/>

        </div>
        <div className="col-sm-12 col-md-12  mt-5 p-0">

        <Footer />
        
        </div>

        </div>
    
 </>
  )
}
export default CourseList
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';

import logo_footer from '../Images/Logo_dark.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ScroolUp from '../Components/ScroolUp'

import { Link } from 'react-router-dom';

function Footer() {
  return <>
 
<div className="row footer mt-5">



<div className="col-sm-12 col-md-4 col-xl-3 rightside  mb-4">

<h5 className='mt-4 footer_left'>LOCATION </h5>
<div className='mt-4 footer_left'><b>CALICUT | VALAKOM</b></div>

               2nd Floor <br />
                Hilite Business Park<br/>
                Calicut,  Kerala<br/>
               
                <strong>Email:</strong> <br/>
                connect@maverixpro.com<br/>
           
                <strong>Website:</strong> <br/>
                www.maverixpro.com<br/>
                <strong>For details, call:</strong> <br/>
                +91 9745 444 369
           

</div>


<div className="col-sm-12 col-md-4 col-xl-3 rightside">

<h5 className='mt-4 footer_left'>ABOUT US </h5>
<div className="footer_links mt-3">

<ul>
<li>  <Link to="/AboutUs"> <FontAwesomeIcon icon={faArrowRight} /> About</Link></li>

<li><Link to="/Services"> <FontAwesomeIcon icon={faArrowRight} /> Services</Link></li>

<li><Link to="/Faq"> <FontAwesomeIcon icon={faArrowRight} /> FAQ</Link></li>

</ul>
</div>

<div className="footer_links">
<hr/>
<ul>
<li><Link to="/AboutUs"> <FontAwesomeIcon icon={faArrowRight} /> Facebook</Link></li>
<li><Link to="/Services"> <FontAwesomeIcon icon={faArrowRight} /> Instagram</Link></li>
<li><Link to="/Faq"> <FontAwesomeIcon icon={faArrowRight} /> Linkedin</Link></li>
<li><Link to="/Faq"> <FontAwesomeIcon icon={faArrowRight} /> Twitter</Link></li>
</ul>

</div>
</div>

<div className="col-sm-12 col-md-4 col-xl-3 rightside">

<h5 className='mt-4 footer_left'>CONTACT </h5>

<TextField id="name" className="m-2" label="Name" variant="standard" />

<TextField id="mobile" className="m-2" label="Mobile" variant="standard" />

<TextField id="email" className="m-2" label="Email" variant="standard" />

<br/>

<Button variant="warning" className='start_button'>CONTACT US</Button>

</div>

<div className="col-sm-12 col-md-4 col-xl-3 rightside">

<h5 className='mt-4 footer_left'>LEGAL </h5>
<div className="footer_links mt-3">

<ul>
<li><Link to="/Privacy"> <FontAwesomeIcon icon={faArrowRight} /> Privacy policy</Link></li>

<li><Link to="/Disclaimer"> <FontAwesomeIcon icon={faArrowRight} /> Disclaimer </Link></li>

<li><Link to="/Terms"> <FontAwesomeIcon icon={faArrowRight} /> Terms & Conditions</Link></li>

<li><Link to="/Company"> <FontAwesomeIcon icon={faArrowRight} /> Company</Link></li>

<li>
<img src={logo_footer} className='mt-5' alt='logo'/>

</li>
</ul>
</div>
</div>

<hr />

<ScroolUp />

<div className="col-12 m-0 p-0">
<p className=' m-0 p-0'>Copyright 2022 by Refsnes Data. All Rights Reserved.</p>
</div>

</div>


  </>;
}

export default Footer;

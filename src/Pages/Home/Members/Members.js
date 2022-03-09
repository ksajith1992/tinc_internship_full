import React from 'react';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Members() {
  return <>


<div className="row bg_pink p-4">

<div className="col-sm-12 col-md-12 p-5">
<h2>100+ Members Nationally !</h2>
<p className='members_data'>Create React App doesnt handle backend logic so you can use it with any backend you want.
 Under the hood, it uses Babel and webpack, but you dont need to know anything about them.</p>
<Button className='learn_more'>Learn More <FontAwesomeIcon icon={faArrowRight} /> </Button>

</div>
</div>

  </>;
}


export default Members;


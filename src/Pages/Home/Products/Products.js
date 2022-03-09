import React from 'react';
import 'react-tabs/style/react-tabs.css';
import ProductTab from './ProductTab';


function Products() {
  return <>
<div className='bg_products'>
    
<div className='p-0'>
<h2 className='pb-5'>Our Products </h2>
<ProductTab />
</div>

</div>

  </>;
}

export default Products;

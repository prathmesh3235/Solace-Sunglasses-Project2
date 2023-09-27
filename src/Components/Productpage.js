import React,{useEffect} from 'react';
import Slider from './Slider';
import ReactGA from 'react-ga4';
import Footer from './Footer';

const Productpage = ( {product, userId}) => 
{
  useEffect(()=>{ 
    const urlParams = new URLSearchParams(window.location.search);
  const product_id = urlParams.get('product_id')
    ReactGA.event({
    action: userId,
    category:"clicked product " + product_id,
    value: parseInt(product_id)
   });
  })

  return (
    <div> 
    <div className="product-page-three">
      <h1> {product.product_name} </h1>
      <div className='threeprod'> 
      {[1,2,3].map((i) => {
        return (i === 1 ? <img  src={product.thumb} /> : i === 2 ? <img src={product.thumb2} /> : <img src={product.thumb3} />);
      })}
      </div>
      <Slider product={product} /> 
    </div>
    
    </div>
    

    
  );
};




export default Productpage;

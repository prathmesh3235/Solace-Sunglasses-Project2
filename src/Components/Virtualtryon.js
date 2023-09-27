import React from 'react'
import { Button } from '../styles/Button'
import styled from 'styled-components'
import { BsEmojiSunglasses, BsCameraFill } from "react-icons/bs";
import SecondHeader from './SecondHeader';
import Footer from './Footer';
import ReactGA from 'react-ga4';



const Virtualtryon = ({userId,product}) => {
  const handleClick = () => {
    console.log("clicked on Virtual tryon")
    ReactGA.event({
      category: "clicked virtual tryon for " + product.product_name,
      action: userId,
     });
  }

  return (
  
    <Wrapper>
     <SecondHeader/>
    <div className="virtual-container">
        {/* <h2 className="virtual-text"> <BsEmojiSunglasses /> Probiere {product.product_name} virtuell an</h2> */}
        <div className="vertical-center">
        <a onClick={handleClick} href={'https://virtual-tryon-five.vercel.app/?sku=' +product.sku} target='blank'>
          <Button> <BsCameraFill /> Try On Virtually</Button></a>
          </div> 
    
    {/* <div className="Iframe">
      <h2>Iframe</h2>
      <iframe src="https://seashell-app-4lcie.ondigitalocean.app/"  width={500} height={500} title='A youtube video on React hooks'></iframe>
    </div> */}
    </div>
    
    </Wrapper>
  )
};

const Wrapper = styled.section`



`;
export default Virtualtryon;
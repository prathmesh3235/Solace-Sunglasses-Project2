import React from 'react'
import styled from 'styled-components';
import {AiOutlineArrowRight} from 'react-icons/ai'
import {BsDot} from 'react-icons/bs'
import { Button } from '../styles/Button';
import { useNavigate } from "react-router-dom";
import ReactGA from 'react-ga4';
import { doc, setDoc, arrayUnion } from "@firebase/firestore"
import { db } from "../services/firebase"


const ProductDisplay = ({product, userId}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    const ref = doc(db, "users", userId) // Firebase creates this automatically
    let data = {
        "Clicked More Information": arrayUnion(product.product_name)
    }
    try {
        setDoc(ref, data, { merge: true })
    } catch(err) {
        console.log(err)
    }
     navigate('/product/moreinfo?product_id=' + product.id + '&userId=' + userId);
  }
  return (
    <Wrapper className='prodDispSec'>
      <h2 className="heading"> Features</h2>
      <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '50px', marginBottom:'50px'}}>
      {/* <img src="images/sunnyclubmaster.jpeg" alt="hero-section-photo" className="img-style"/> */}
      <div className='display-info'> 
       <ul className="product-info">
      <li className="product-info-i">  
       <h3> <BsDot/>  Preis: 89,95€ (inkl MwSt.) </h3>
      </li>
      <li className="product-info-i">
       <h3><BsDot/> Farbe: {product.farbe} </h3>
      </li>
      <li className="product-info-i">
        
       <h3> <BsDot/>  Material: Metall </h3>
      </li>
      <li className="product-info-i">
        
       <h3> <BsDot/> Lieferung in 2 – 4 Werktagen </h3>
      </li>
      {/* <li className="product-info-i">
        
       <h3><AiOutlineArrowRight/> Extra Feature One </h3>
      </li>
      <li className="product-info-i">
        
       <h3><AiOutlineArrowRight/> Extra Feature Two </h3>
      </li> */}
      <li className="product-info-i">  
       <h3>  <a><Button onClick={handleClick}> <AiOutlineArrowRight/> Weitere Eigenschaften </Button></a> </h3>
      </li>
      
    </ul>
      </div>
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`


position: relative;
padding:10px;
margin-top:70px;
margin-right:10px;
  .productDisplay: {
    display: 'flex',
    flexDirection: 'row';
    
  }
.display-info: {

}

.heading{
  // font-family: fantasy;

  margin-top: 0px;
  text-align: center;
  text-bold: bold;
  // margin-left:50px;
  
  text-decoration-color: Blue;
  text-decoration-thickness: 5px;
  font-weight: bold;
}


.product-info: {
  alignItems: 'center',
  margin-top:30px;
}
.img-style{
  margin-top: 10px;
  width: 40%;
  height: auto;
  display: flex;
  justify-content: left;
  align-items: left;
}

`;

export default ProductDisplay
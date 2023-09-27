import React from 'react'
import SecondHeader from './Components/SecondHeader'
import Footer from "./Components/Footer";
import styled from 'styled-components';

const Thankyoupage = () => {
  return (
    <div> 
      <SecondHeader/>
      <h2 className='tyh2'> Vielen Dank. </h2>
      <br/> <h3 className='tyh3'>  Drücken Sie nun <u>unten im Fragebogen </u>auf den “Weiter-Pfeil” und füllen Sie die restlichen Fragen aus </h3>
      <Footer/>
      </div>
  )
}

export default Thankyoupage
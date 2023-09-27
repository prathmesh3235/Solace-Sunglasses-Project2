import React from 'react'
import styled from 'styled-components';
import { Player, ControlBar } from 'video-react';
import ReactGA from 'react-ga4';
import {DefaultPlayer as Video} from 'react-html5video';
import product1 from '../../src/assets/videos/product1.mp4';
import product2 from '../../src/assets/videos/product2.mp4';
import product3 from '../../src/assets/videos/product3.mp4';
import product4 from '../../src/assets/videos/product4.mp4';
import product5 from '../../src/assets/videos/product5.mp4';



const Videosection = ({product, userId}) => {
  return (
    // <Video autoPlay loop muted="true">
    //   <source src={product.id === 1 ? product1 : product.id === 2 ? product2 : product.id === 3 ? product3 : product.id === 4 ? product4 : product5} type= "video/webm"/> 


    // </Video>
    <div  className='ytvideo'> 
          <iframe className='iFrame' width="auto" height="315" src={product.videolink} frameborder="0" controls="0&showinfo=0" rel="0" allowfullscreen>
         </iframe>
    </div>
  )
}

export default Videosection
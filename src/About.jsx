import React from 'react';
import {NavLink} from 'react-router-dom'
import img from './images/about.png';
import Common from "./Common";
const About = ()=> {
  return (
    <>
    <Common name='Welcome to About page' imgsrc={img} visit='/contact/' btname='Contact Now'/>
      
    </>
  );
}

export default About;
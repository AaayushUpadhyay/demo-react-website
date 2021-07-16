import React from 'react';
import {NavLink} from 'react-router-dom'
import img from './images/home.svg'
import Common from "./Common";
const Home = ()=> {
  return (
    <>
     <Common name='Grow your skills with' imgsrc={img} visit='/service/' btname='Get started'/>
    
    </>
  );
}

export default Home;
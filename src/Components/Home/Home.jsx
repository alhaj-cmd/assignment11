import React, { useEffect, useState } from 'react';
import Fakedata from '../../Fakedata';
import Footer from '../Footer/Footer';
import NavbarMy from '../Navbar/NavbarMy';
//import OurServices from '../OurServices/OurServices';
import Slide from '../Slide/Slide';

const event = [
   
    {
        name:'Gear-Icon',
        price:'33369',
        pic:'https://i.ibb.co/chwnYpY/Auto-Centre-Auto-Repair-Service-Gear-Icon-with-Tools-and-Car-Yellow-Background.jpg'
    },
    {
        name:'speedom',
        price:'69769',
        pic:'https://i.ibb.co/4TxCT2x/Car-service-round-concept-with-automobile-wrench-engine-piston-radiator-transmission-battery-speedom.jpg'
    },
    {
        name:'Vector-illu',
        price:'99769',
        pic:'https://i.ibb.co/WpPhph1/Vintage-car-repair-elements-set-Monochrome-parts-and-tools-retro-engine-wrenches-concept-Vector-illu.jpg'
    }

];
const Home = () => {
    const [product,setproduct] =useState([])
   useEffect(()=>{
    fetch('http://localhost:5055/product')
    .then(res=>res.json())
    .then(data=>setproduct(data))
   },[])
   
    return (
        <div className="container">
      <NavbarMy />
      <Slide/>
     
      <div>
      <h2 className='text-center text-primary m-5'>OUR CAR REPAIR DISCOUNT</h2>
      <div className='row'>
     
            {
               product.map((pd,i) =><Fakedata pd={pd} key={i}/>)
            }
            
        </div>
        </div>
        <Footer/>
    </div>
    
    );
};

export default Home;
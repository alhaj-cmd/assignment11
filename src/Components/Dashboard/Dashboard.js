import React from 'react';
import Slider from './Slider/Slider'
//import { Zoom } from 'react-reveal';
import AnimatedBg from "react-animated-bg";

const Dashboard = () => {
    const imagesList = [
        'url("https://images.dog.ceo/breeds/labrador/n02099712_3503.jpg")',
        'url("https://images.dog.ceo/breeds/labrador/n02099712_5844.jpg")',
        'url("https://images.dog.ceo/breeds/labrador/n02099712_7481.jpg")',
        'url("https://images.dog.ceo/breeds/labrador/n02099712_7414.jpg")'
    ];
    return (
       <div>
           <div className="container-fluid row">
               {/* <div className="col-md-4">
<h2>Dashboard</h2>
               </div> */}
                <div className="col-md-9">
                    <AnimatedBg
                        colors={imagesList}
                        duration={2}
                        delay={1}
                        timingFunction="ease-out"
                        className="animated-section animated-images"
                    >
                          <h2 className="text-center mt-3" style={{ color: 'rgba(98,171,0,255)' }}>Dashboard</h2>
                        {/* <Zoom right cascade>
                            <h2 className="text-center mt-3" style={{ color: 'rgba(98,171,0,255)' }}>Dashboard</h2>
                        </Zoom> */}
                    </AnimatedBg>
                </div>
               <div className='col-md-3'>
                  <Slider></Slider>
               </div>
           </div>
       </div>
    );
};

export default Dashboard;
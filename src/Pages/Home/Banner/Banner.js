import React from 'react';
import './Banner.css'
import rayhan from '../../../Image/rayhan.png'
import {Typewriter}  from 'react-simple-typewriter';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  return (
    <div>

      <div className="hero min-h-screen flex justify-around h-2/4 bg-gradient-to-r from-cyan-500 to-blue-500">

        <div className="hero-content flex-col lg:flex-row-reverse rounded-md ">
          <div className='pic rounded-lg w-screen'>
            <img className='w-screen' src={rayhan} alt="" />
          </div>
          <div className='d1'>
            <h1 className="text-2xl font-bold">Hello there!, </h1>
            <h1 className="text-3xl font-bold">My name is Md Rayhan Islam </h1>
            <h1 className="text-1xl font-bold text-rose-800" > 
            {/* I am <span>
              <Typewriter
               words={['Web Devloper', 'Web Designer', 'Sleep', 'Code', 'Repeat!']}
               loop={10}
               cursor
               cursorStyle='_'
               typeSpeed={100}
               deleteSpeed={50}
               delaySpeed={1000}
              />
            </span> */}



            <TypeAnimation
    // Same String at the start will only be typed once, initially
    sequence={[
    'I am Web Devloper',
    1000,
    'I am Web Designer',
    1000,
    'I am MERN Stack Developer',
    1000,
    'I am Freelancer',
    1000,
    ]}
    speed={50} // Custom Speed from 1-99 - Default Speed: 40
    style={{ fontSize: '2em' }}
    wrapper="span" // Animation will be rendered as a <span>
    repeat={Infinity} // Repeat this Animation Sequence infinitely
  />






            </h1>

            <p className="py-10 text-2xl text-white "> I've been a MERN Stack developer for more than one years. I've completed numerous projects. All of the websites I've built are historical, and buyers recommend that others contact me if they need a website. You can read reviews about my project here. So, please don't hesitate to contact me so that we can discuss your project. </p>
            <button className="btn bg-gradient-to-r from-indigo-500 to-red-600 ">Hire Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
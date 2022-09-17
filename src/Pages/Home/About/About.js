import React from 'react';
import './About.css'
const About = () => {
    return (
        <div id='about'>
            <h1 className='section'> <span className='text-green-600'>About</span> Me</h1>
            <div className='container bg-gradient-to-r from-emerald-600 to-yellow-200'>
                <div className='about-me'>
                    <h5>Name : Md Rayhan Islam</h5>
                    <h5>Age : 21+</h5>
                    <h5>Post : Jr. MERN Stack Developer</h5>
                    <h5>Language : Bangla And English</h5>
                    <h5>Address : Dinajpur, Rangpur, Bangladesh</h5>
                </div>
                <div className='about-me'>
                    <div className='hov'>

                        <div className="st bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                           <p> Years Of Experience</p>
                            <h1> 1+ </h1>
                        </div>

                        <div className="st bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                           <p> New Users</p>
                            <h1>18+</h1>
                        </div>

                        <div className="st bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                          <p>  Happy Clients </p>
                           <h1>5+</h1>
                        </div>

                        <div className="st bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        <p>Awards Won</p>
                           <h1>1+</h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
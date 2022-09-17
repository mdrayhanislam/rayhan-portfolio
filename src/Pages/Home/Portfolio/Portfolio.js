import React from 'react';
import project1 from '../../../Image/project1.png'
import project2 from '../../../Image/project2.png'
import project3 from '../../../Image/project3.png'
import projec4 from '../../../Image/project4.png'
import './portfolio.css'
const Portfolio = () => {
  return (
    <div id='portfolio'>
      <h1 className='section'> My <span className='text-green-600'>Project</span></h1>



      <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <div className='container'>
              <div className='card'>
                <img src={projec4} alt="ourseba project" />
                <div className='intro'>
                  <h1 className="text-3xl text-center font-bold">Doctor Portal Website</h1>
                  <div className='pt-20 flex justify-around'>
                    <button className='btn btn-sm btn-secondary'><a href="https://doctors-portal-bc4fb.web.app/" target="_blank" className='font-bold'>Live Link</a></button>
                    <button className='btn btn-sm btn-secondary'><a href="https://github.com/mdrayhanislam/doctor-portal-client" target="_blank" className='font-bold'>Clientsite Github Link</a></button>
                    
                  </div>
                  <div className='mt-5 flex justify-center'>
                  <button className='btn btn-sm btn-secondary '><a href="https://github.com/mdrayhanislam/doctors-portal-server" target="_blank" className='font-bold'>Serversite Github Link</a></button>
                  </div>
                  
                </div>
              </div>
              <div className='card'>
                <img src={project2} alt="ourseba project" />
                <div className='intro'>
                  <h1 className="text-3xl text-center font-bold">Service Provider Website</h1>
                  <div className='pt-20 flex justify-around'>
                    <button className='btn btn-sm btn-sm btn-secondary'><a href="https://assignment-10-495ba.web.app/" target="_blank">Live Link</a></button>
                    <button className='btn btn-sm btn-sm btn-secondary'><a href="https://github.com/mdrayhanislam/healthCare" target="_blank">Github Link</a></button>
                  </div>
                </div>
              </div>

            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            
            <div className='container'>
              <div className='card'>
                <img src={project1} alt="ourseba project" />
                <div className='intro'>
                  <h1 className="text-3xl text-center font-bold">Event Management Website</h1>
                  <div className='pt-20 flex justify-around'>
                    <button className='btn btn-sm btn-secondary'><a href="https://event-management-rayhanislam.netlify.app/" target="_blank" className='font-bold'>Live Link</a></button>
                    <button className='btn btn-sm btn-secondary'><a href="https://github.com/mdrayhanislam/our-sheba" target="_blank" className='font-bold'>Github Link</a></button>

                  </div>
                </div>
              </div>
              <div className='card'>
                <img src={project3} alt="ourseba project" />
                <div className='intro'>
                  <h1 className="text-3xl text-center font-bold">Warehouse Website</h1>
                  <div className='pt-20 flex justify-around'>
                    <button className='btn btn-sm btn-secondary'><a href="https://assignment-11-af770.web.app/" target="_blank">Live Link</a></button>
                    <button className='btn btn-sm btn-secondary'><a href="https://github.com/mdrayhanislam/wareHouse" target="_blank">Github Link</a></button>
                    
                  </div>
                  <div className='mt-5 flex justify-center'>
                  <button className='btn btn-sm btn-secondary '><a href="https://github.com/mdrayhanislam/wareHouse-server" target="_blank">Serversite Github Link</a></button>
                  </div>

                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>

          
        </div>


      <div className='project'>

       


        {/* <div className='container'>
          <div className='card'>
            <img src={project1} alt="ourseba project" />
            <div className='intro'>
              <h1 className="text-3xl text-center font-bold">Event Management Website</h1>
              <div className='pt-20 flex justify-around'>
                <button className='btn btn-secondary'><a href="https://event-management-rayhanislam.netlify.app/" target="_blank" className='font-bold'>Live Link</a></button>
                <button className='btn btn-secondary'><a href="https://github.com/mdrayhanislam/our-sheba" target="_blank" className='font-bold'>Github Link</a></button>
              
              </div>
            </div>
          </div>
        </div> */}

        {/* <div>
          <h3><a href="https://event-management-rayhanislam.netlify.app/" target="_blank">Live Link</a></h3>
          <h3><a href="https://github.com/mdrayhanislam/our-sheba" target="_blank">Github Link</a></h3>
          <img src={project1} alt="" />
        </div>
        <div>
          <h3><a href="https://assignment-10-495ba.web.app/" target="_blank">Live Link</a></h3>
          <h3><a href="https://github.com/mdrayhanislam/healthCare" target="_blank">Github Link</a></h3>
          <img src={project2} alt="" />
        </div>
        <div>
          <h3><a href="https://assignment-11-af770.web.app/" target="_blank">Live Link</a></h3>
          <h3><a href="https://github.com/mdrayhanislam/wareHouse" target="_blank">Github Link</a></h3>
          <h3><a href="https://github.com/mdrayhanislam/wareHouse-server" target="_blank">Serversite Github Link</a></h3>
          <img src={project3} alt="" />
        </div> */}

      </div>
    </div>
  );
};

export default Portfolio;
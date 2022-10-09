import React from 'react';
import './Contract.css'
import Facebook from '../../../Image/fb.png'
import Github from '../../../Image/github.png'
import Linkdin from '../../../Image/linkdin.png'
const Contract = () => {
    return (
        <div id='contract'>
            <h1 className='section'><span className='text-green-600'>Contract</span> Me</h1>

            <div className="hero min-h-screen bg-gradient-to-r from-amber-200 from-cyan-500 to-blue-400">
                <div className="hero-content flex-col lg:justify-between lg:flex-row-reverse">

                    
                        <form action="https://formspree.io/f/meqdapgk" method='POST' target='_blank'  className='m-5 bg-base-100 shadow-xl p-10 formstyle'>

                            <input type="name" name='Name' required placeholder="Name" className="input input-bordered input-warning lg:w-full max-w-xs mt-20" /> <br />
                            <input type="email" name='email' required placeholder="Type Email" className="input input-bordered input-warning lg:w-full max-w-xs mt-10" /> <br />
                            <textarea className="mt-10 textarea textarea-accent" required name='Body' placeholder="Description"></textarea> <br />
                            <button className="btn btn-success mt-5">Send</button>
                            {/* <input type="subnit" value="send" className="bg-primary p-5" /> */}
                        </form>
                    


                    <div>
                       
                        <p className="text-red-600 md:text-4xl lg:text-4xl font-bold">Email</p>
                        <p className='mt-5 md:text-2xl lg:text-2xl font-bold '>mdrayhanislam163@gmail.com</p>
                        <p className="text-red-600 md:text-4xl lg:text-4xl font-bold mt-5">Phone Number</p>
                        <p className='mt-5 md:text-2xl lg:text-2xl font-bold '>+08801794060452</p>
                        <p className="text-red-600 md:text-4xl lg:text-4xl font-bold mt-5">
                            WhatsApp Number</p>
                        <p className='mt-5 md:text-2xl lg:text-2xl font-bold '>+08801794060452</p>
                        
                       <div className='flex mt-10 mx-8 gap-10'> 
                        <a href="https://www.facebook.com/rayhan.islam.543908" target="_blank">
                            <img width="40px" src={Facebook} alt="facebook" />
                        </a>
                        <a href="https://github.com/mdrayhanislam"  target="_blank">
                            <img width="40px" src={Github} alt="github" />
                        </a>
                        <a href="https://www.linkedin.com/in/md-rayhan-islam-8a4266231/"  target="_blank">
                            <img width="40px" src={Linkdin} alt="linkdin" />
                        </a>
                       </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contract;
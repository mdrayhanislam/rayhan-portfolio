import React from 'react';
import './Contract.css'
const Contract = () => {
    return (
        <div id='contract'>
            <h1 className='section'><span className='text-green-600'>Contract</span> Me</h1>
            <div className="hero  bg-base-200">

                <div className="hero-content flex-col lg:flex-row">
                    <form className='form'>
                    <div className="form-control w-full max-w-xs">
                           
                           <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                           
                       </div>

                        <div className="form-control w-full max-w-xs pt-5">
                           
                           <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                           
                       </div>
                        <div className="form-control w-full max-w-xs pt-5">
                           
                            <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" />
                            
                        </div>
                        

                            <div className="form-control pt-5">

                                <textarea className="textarea textarea-bordered h-24" placeholder="White message"></textarea>

                            </div>
                        
                        <div className='pt-5'>

                            <input id='submit' type="submit" value="Submit" className='bg-primary p-3 font-bold rounded-lg '/>
                        </div>
                    </form>
                  
                </div>
            </div>
        </div>
    );
};

export default Contract;
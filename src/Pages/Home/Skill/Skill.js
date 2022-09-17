import React from 'react';
import ab from '../../../Image/html.jpg'
import css from '../../../Image/css.png'
import bootstrap from '../../../Image/bootstrap.png'
import tailwind from '../../../Image/tailwind.png'
import javascript from '../../../Image/javascript.png'
import react from '../../../Image/react.png'
import firebase from '../../../Image/firebase.png'
import github from '../../../Image/github.png'
import netlify from '../../../Image/netlify.png'
import expressjs from '../../../Image/expressjs.png'
import nodejs from '../../../Image/nodejs.png'
import mongodb from '../../../Image/mongodb.png'
import vscode from '../../../Image/vs-code.png'
import heroku from '../../../Image/heroku.png'
import api from '../../../Image/api.png'
import router from '../../../Image/route.png'
import './Skill.css'
const Skill = () => {
    return (
        <div id='skill '>
            <h1 className='section'>Skill</h1>
        <div className='contain bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 lg:gap-20 rounded-lg'>
            <div className='skill'>
                <img src={ab} alt="" />
                <p>HTML</p>
            </div>

            <div className='skill'>
            <img src={css} alt="" />
                <p>CSS</p>
            </div>

            <div className='skill'>
            <img src={bootstrap} alt="" />
                <p>Bootstrap</p>
            </div>

            <div className='skill'>
            <img src={tailwind} alt="" />
                <p>Tailwind CSS</p>
            </div>

            <div className='skill'>
            <img src={javascript} alt="" />
                <p>Javascript</p>
            </div>

            <div className='skill'>
            <img src={react} alt="" />
                <p>React Js</p>
            </div>

            <div className='skill'>
            <img src={firebase} alt="" />
                <p>Firebase</p>
            </div>

            <div className='skill'>
            <img src={github} alt="" />
                <p>Github</p>
            </div>

            <div className='skill'>
            <img src={netlify} alt="" />
                <p>Netlify</p>
            </div>

            <div className='skill'>
            <img src={expressjs} alt="" />
                <p>Express Js</p>
            </div>

            <div className='skill'>
            <img src={nodejs} alt="" />
                <p>Node Js</p>
            </div>

            <div className='skill'>
            <img src={mongodb} alt="" />
                <p>MongoDB</p>
            </div>
            <div className='skill'>
            <img src={vscode} alt="" />
                <p>VS Code</p>
            </div>
            <div className='skill'>
            <img src={heroku} alt="" />
                <p>Heroku</p>
            </div>
            <div className='skill'>
            <img src={api} alt="" />
                <p>API</p>
            </div>
            <div className='skill'>
            <img src={router} alt="" />
                <p>React Router</p>
            </div>
        </div>
        </div>
    );
};

export default Skill;
import React from 'react';
import downArrow from '../assets/down_arrow.svg';

export default (props) => {

    // Gather the data into more useable constants
    const data = props.data;
    const location = data.location;
    const position = data.position;
    const company = data.company;

    // Map over skills, check if we're on the last skill
    // if so add an ampersand and remove the comma.
    const skills = data.skills.map((skill, index) => index === data.skills.length - 1 ?<span key={skill.skill}>&amp; {skill.skill}.</span> : <span key={skill.skill}>{skill.skill}, </span>);

    return (
        <div className="about">
            <div className="container">

                        <h1>Hi, I'm Chad. <br/>
                        I'm a Front End Developer &amp; Designer.</h1>
                        <p className="lead">I love building cool things with JavaScript, DnD, and Movies. I currently live in {location} working for {company} as a {position}.</p>
                        <p className="lead">
                            <strong>My skills include</strong> {skills}
                        </p>
                        <div className="contact">
                            <a href="https://github.com/CmCarti" target="_blank">github</a>
                            <a href="https://codepen.io/chadmcartier/" target="_blank">CodePen</a>
                            <a href="https://twitter.com/cptkrush" target="_blank" >Twitter</a>
                            <a href="mailto:chadmcartier@gmail.com">chadmcartier@gmail.com</a>

                        </div>
                        <div className="arrow-container">
                        <img src={downArrow} alt="Scroll down to see my projects" className="svg"/>
                        </div>


            </div>
        </div>
    )
};
import React from 'react';

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
                <div className="row">
                    <div className="col">
                        <h1>Hi, I'm Chad. <br/>
                        I'm a Front End Developer &amp; Designer.</h1>
                        <p className="lead">I love building cool things with JavaScript, DnD, and Movies. I currently live in {location} working for {company} as a {position}.</p>
                        <p className="lead">
                            My skills include {skills}
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
};
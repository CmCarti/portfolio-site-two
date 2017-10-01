import React from 'react';
import PrismicDOM from 'prismic-dom';
import TechStack from './tech-stack';
export default (props) => {
    const data = props.data;
    console.log(data);
    // Grab the bodyText from the data and convert it to HTML with PrismicDOM
    const bodyText = PrismicDOM.RichText.asHtml(data.description);
    // Check if a git link exists, if so, render it, else render the demo link only
    const cardAction = data.git ? <div><a href={data.git.url} target="_blank" className="btn">GitHub</a><a href={data.url.url} target="_blank" className="btn">Visit Demo</a> </div> : <div><a href={data.url.url} target="_blank" className="btn">Visit Website</a></div>
    // Map through the technology and render <TechStack /> for each tech
    const techStack = data.technology.map(tech => <TechStack key={tech.name[0].text} data={tech.name[0].text} />);
        return(
        <div className="card">
                        <div className="card-img">
                            <img src={data.image.url} alt=""/>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">
                                {data.name[0].text}
                            </h3>
                            <div className="card-tech">
                                {techStack}
                            </div>
                            <div className="card-content" dangerouslySetInnerHTML={{__html: bodyText}} />
                        <div className="card-action">
                            {cardAction}
                        </div>

                        </div>
                    </div>
    )
}
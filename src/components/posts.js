import React from 'react';

import PostContent from './post-content';
import PortfolioHeader from './portfolio-header';
export default (props) => {
        const renderPosts = () => {
            // render <PostContent /> for each post in the data
            return props.data.map( post => {
                const data = post.data;
                return(
                <PostContent key={post.id}className="post" data={data} />
            ) } );
        }

        return (
            <div className="websites">
                <div className="container">
                <PortfolioHeader path={props.location.pathname} />

                            { renderPosts() }

                </div>
            </div>
        )

}
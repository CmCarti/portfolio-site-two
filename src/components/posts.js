import React from 'react';

export default (props) => {
    
        const renderPosts = () => {
            if(props.data === undefined) return <div></div>
            console.log(props.data)
            return props.data.map( post => (
                <div key={post.id}className="post">
                    <h3>{post.data.name[0].text}</h3>
                </div>
            ) )
        }
    
        return (
            <div className="websites">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            { renderPosts() }
                        </div>
                    </div>
                </div>
            </div>
        )
    
}
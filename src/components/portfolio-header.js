import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div className="portfolio-header">
            <div className="container">
                <div className="row">
                    <Link 
                        to="/apps"
                        className="portfolio-link active">
                            Apps
                    </Link>
                    <Link 
                        to="/websites"
                        className="portfolio-link">
                            Websites
                    </Link>
                </div>
            </div>
        </div>
    )
}
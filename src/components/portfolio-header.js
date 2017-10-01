import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

   let websitesClasses = 'portfolio-link'
   let appsClasses = 'portfolio-link';
   if(props.path === '/' || props.path ==='/apps'){
       appsClasses ='portfolio-link active';
   } else {
       websitesClasses = 'portfolio-link active';
   }


    return (
        <div className="portfolio-header">
            <div className="container">

                    <Link
                        to="/apps"
                        className={appsClasses}>
                            Apps
                    </Link>
                    <Link
                        to="/websites"
                        className={websitesClasses}>
                            Websites
                    </Link>

            </div>
        </div>
    )
}
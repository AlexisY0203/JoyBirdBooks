import React from 'react';
import './blog.css';

export default function Blog() {
    return (
        <>
            <div className="author-spotlight row page-spacing">
                <div className="col-text">
                    <h1 className="pt-20">Blog</h1> 
                    <h2 className='subheading'>Local Author Spotlight</h2>
                    <h2 className='subheading2'>Date Text</h2>

                    <div className="p-20"></div>

                    <h2 className='subheading'>Title Text</h2>
                    <p className="description">
                        Description text description text description text description text description text description text
                        description text description text description text description text description text description text
                        description text description text description text description text description text description text
                        description text description text description text description text description text description text
                        description text description text description text description text description text description text
                        description text description text description text description text description text description text
                    </p>
                </div>

                <div className="col-image">
                    <h2>Author Name</h2>
                    <p>Author Text</p>
                    <img src="images/placeholder-image.jpg"/>

                    <div>
                        <button className="btn">Read More</button>
                    </div>
                </div>

                <div className="p-20"></div>
            </div>

            <div className="past-spotlights page-spacing">
                <h2>See Past Spotlights</h2>
            </div>
        </>
    )
}
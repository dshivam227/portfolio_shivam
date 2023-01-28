import React from 'react';
import './Blog.css';

import Image1 from '../../assets/blog-1.svg';


const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Latest Blogs</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        {/* <a href="#"><span className="blog__category">Example</span></a> */}
                        <a href="https://medium.com/@dshivam227/installing-react-router-8ceced34e471"><img src={Image1} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Installing React Router</h3>
                        <div className="blog__meta">
                            <span>24 October, 2022</span>
                            <span className="blog__dot">.</span>
                            <span>Shivam</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
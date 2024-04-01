import React from 'react';
import {Link} from "react-router-dom";

const BlogCard = () => {
  return (
      <div className="blog-card">
        <div className='card-image'>
          <img src='../images/fruits.jpg'className='img-fluid w-100' alt='blog' />
        </div>
        <div className='blog-content'>
          <p className='date'>1 Dec, 2022</p>
          <h5 className='title'>Bolg 1</h5>
          <p className='desc'>
          Provide a valid, navigable address as the href value.
           If you cannot provide a valid href, but still need 
           the element to resemble a link, use a button and 
           change it with appropriate styles.
          </p>
          <Link to="/blog/:id" className='button'>
            Read More
          </Link>
        </div>
      </div>
  );
};

export default BlogCard;
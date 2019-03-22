import React from 'react';

const BlogPost = ({data}) => {
  return (
    <div className='BlogPost'>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
};

export default BlogPost;
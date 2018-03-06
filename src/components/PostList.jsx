import React from 'react';
import SinglePost from './SinglePost';
import postList from './posts.json';


const PostList = () => (
  <div>
    {
      postList.map(({ id, text, title }) => <SinglePost key={id} text={text} title={title} />)
    }
  </div>
);


export default PostList;

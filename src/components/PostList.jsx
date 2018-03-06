import React from 'react';
import { Item } from 'semantic-ui-react';
import SinglePost from './SinglePost';
import postList from './posts.json';


const PostList = () => (
  <Item>
    {
      postList.map(({ id, text, title }) => <SinglePost key={id} text={text} title={title} />)
    }
  </Item>
);


export default PostList;

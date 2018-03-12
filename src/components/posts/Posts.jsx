// modules
import React from 'react';
import { Item } from 'semantic-ui-react';

// json
import postList from '../../utils/posts.json';

// components
import SinglePost from './SinglePost';


const Posts = () => (
  <Item.Group divided>
    <Item>
      {
        postList.map(({ id, text, title }) => <SinglePost key={id} text={text} title={title} />)
      }
    </Item>
  </Item.Group>
);


export default Posts;

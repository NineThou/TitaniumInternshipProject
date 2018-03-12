import React from 'react';
import { Item } from 'semantic-ui-react';
import postList from '../../utils/posts.json';
import SinglePost from './SinglePost';


const Posts = () => (
  <Item.Group divided="true">
    <Item>
      {
        postList.map(({ id, text, title }) => <SinglePost key={id} text={text} title={title} />)
      }
    </Item>
  </Item.Group>
);


export default Posts;

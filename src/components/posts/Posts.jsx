// modules
import React from 'react';
import styled from 'react-emotion';
import { Item } from 'semantic-ui-react';

// json
import postList from '../../utils/posts.json';

// components
import SinglePost from './SinglePost';

const PostWrap = styled('div')`
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Posts = () => (
  <PostWrap>
    <Item.Group divided="true">
      <Item>
        {
          postList.map(({ id, text, title }) => <SinglePost key={id} text={text} title={title} />)
        }
      </Item>
    </Item.Group>
  </PostWrap>
);


export default Posts;

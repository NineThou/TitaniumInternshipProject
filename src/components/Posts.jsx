import React from 'react';
import styled from 'react-emotion';
import { Item } from 'semantic-ui-react';
import PostList from './PostList';

const PostWrap = styled('div')`
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Posts = () => (
  <PostWrap>
    <Item.Group divided="true">
      <PostList />
    </Item.Group>
  </PostWrap>
);


export default Posts;

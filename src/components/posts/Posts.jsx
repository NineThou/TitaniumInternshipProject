// modules
import React from 'react';
import { Container, List } from 'semantic-ui-react';

// json
import postList from '../../posts.json';

// components
import SinglePost from './SinglePost';


const Posts = () => (
  <Container>
    <List>
      {
        postList.map(event => <SinglePost key={event.id} details={event} />)
      }
    </List>
  </Container>
);


export default Posts;

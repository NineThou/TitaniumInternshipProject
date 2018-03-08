import React from 'react';
import { Item, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const PostWrap = styled('div')`
  background-color: #B2BABB;
  border: 3px solid #586180;
  border-radius: 8px;
  margin: 10px !important;
  padding: 10px;
`;

const SinglePost = ({ text, title }) => (
  <PostWrap>
    <Item.Content verticalAlign="middle">
      <Item.Header as="h2">{title}</Item.Header>
      <Item.Description>{text}</Item.Description>
      <Item.Extra>
        <Button floated="right">
          Delete
        </Button>
      </Item.Extra>
    </Item.Content>
  </PostWrap>
);

SinglePost.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SinglePost;

import React from 'react';
import { Item, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SinglePost = ({ text, title }) => (
  <Item>
    <Item.Content verticalAlign="middle">
      <Item.Header as="h2">{title}</Item.Header>
      <Item.Description>{text}</Item.Description>
      <Item.Extra>
        <Button floated="right">
          Button
        </Button>
      </Item.Extra>
    </Item.Content>
  </Item>
);

SinglePost.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SinglePost;

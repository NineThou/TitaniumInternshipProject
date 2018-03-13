// modules
import React from 'react';
import { Item } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

// colors
import { grey, lavender } from '../../styles/colors';

const PostWrap = styled('div')`
  background-color: #B2BABB;
  border: 3px solid #586180;
  border-radius: 8px;
  margin: 10px !important;
  padding: 10px;
`;

const colors = css`
  color: white !important;
  background-color: ${grey} !important;
  border: 3px solid ${lavender};
`;

const SinglePost = ({ text, title }) => (
  <PostWrap className={colors}>
    <Item.Content verticalAlign="middle">
      <Item.Header as="h2">{title}</Item.Header>
      <Item.Description>{text}</Item.Description>
    </Item.Content>
  </PostWrap>
);

SinglePost.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SinglePost;

// modules
import React from 'react';
import { Item, List, Button, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
// colors
import { grey, purple } from '../../styles/colors';

const PostWrap = styled('div')`
  background-color: #B2BABB;
  border: 3px solid #586180;
  border-radius: 8px;
  margin: 30px !important;
  padding: 10px;
  padding-bottom: 10px !important;
  display: flex;
`;

const ContentWrap = styled('div')`
  display: flex;
  align-items: center;
`;

const imgpos = css`
  margin: auto 0;
  margin-right: 50px;
`;

const colors = css`
  color: white !important;
  background-color: ${grey} !important;
  border: 3px solid ${purple};
`;

const SinglePost = ({ details }) => (
  <PostWrap className={colors}>
    <Image className={imgpos} src="https://picsum.photos/200/?random" />
    <ContentWrap>
      <Item.Content verticalAlign="middle">
        <Item.Header as="h2">{details.title}</Item.Header>
        <Item.Description>{details.text.slice(0, 250)}</Item.Description>
        <Link to={`/posts/${details.id}`}>
          <List.Content>
            <Button floated="right">
              <FormattedMessage id="posts.readmore" />
            </Button>
          </List.Content>
        </Link>
      </Item.Content>
    </ContentWrap>
  </PostWrap>
);

SinglePost.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};

export default SinglePost;

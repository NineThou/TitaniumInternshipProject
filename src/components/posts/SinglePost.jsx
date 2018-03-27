// modules
import React from 'react';
import { Item, List, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
// colors
import { grey } from '../../styles/colors';

const PostWrap = styled('div')`
  display: flex;
  color: white;
  background-color: ${grey};
  margin: 30px !important;
  height: 100%;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
    @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

const ContentWrap = styled('div')`
  display: flex;
  align-items: center;
  @media (max-width: 992px) {
    padding: 10px;
  }
`;

const colors = css`
  color: white !important;
  background-color: ${grey} !important;
`;

const ImageDiv = styled('div')`
  height: 400px;
  min-width: 400px;
  background-size: cover;
  margin-right: 30px;
  @media(max-width: 800px){
    margin-right: 0;
    min-width: 270px;
  }
`;

const username = css`
  padding-top: 30px;
  font-style: italic;
`;

const date = css`
  padding-bottom: 30px;
  font-style: italic;
`;

const Delete = styled('button')`
  position: absolute;
  bottom: 100px;
  left: 150px;
  width: 20px;
  height: 20px;
  padding-bottom: 5px;
  padding-right: 15px;
  border-radius: 100%;
`;

const SinglePost = ({ details, id }) => (
  <PostWrap className={colors}>
    <ImageDiv style={{ backgroundImage: `url(${details && details.image})` }} />
    <ContentWrap>
      <Item.Content verticalAlign="middle">
        <Item.Header as="h2">{details.title}</Item.Header>
        <Item.Description>{details.text}</Item.Description>
        <Item.Description className={username}>{`Added by: ${details.user}`}</Item.Description>
        <Item.Description className={date}>{details.date}</Item.Description>
        <Link to={`/posts/${id}`}>
          <List.Content>
            <Button floated="left">
              <FormattedMessage id="posts.readmore" />
            </Button>
          </List.Content>
        </Link>
        <Delete>X</Delete>
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

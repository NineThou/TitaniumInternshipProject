// modules
import React from 'react';
import { Item, List, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// colors
import { grey } from '../../styles/colors';

// utils
import { isLoggedIn } from '../../utils/AuthService';
import { deletePostRequest } from '../../actions/posts-api';

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
    min-width: 230px;
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

const SinglePost = ({ details, id, deletePost }) => (
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
        {isLoggedIn() ? <Button onClick={deletePost} basic inverted color="red">Delete</Button> : null}
      </Item.Content>
    </ContentWrap>
  </PostWrap>
);

SinglePost.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  id: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  deletePostData: bindActionCreators(deletePostRequest, dispatch),
});

export default compose(
  connect(null, mapDispatchToProps),
  withHandlers({
    deletePost: ({ id, deletePostData }) => (e) => {
      e.preventDefault(e);
      if (confirm('You sure u want to delete?')) { // eslint-disable-line
        deletePostData(id);
      }
    },
  }),
)(SinglePost);

// modules
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import decode from 'jwt-decode';
import { compose, withHandlers } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// colors
import { grey } from '../styles/colors';

// helpers
import { editUsername } from '../utils/helperFunctions';

// actions
import { deleteCommentRequest } from '../actions/posts-api';

const CommentsWrap = styled('div')`
  display: flex;
  flex-direction: column;
  background-color: ${grey};
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
  width: 500px;
  div:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

const DeleteIcon = styled('span')`
  cursor: pointer;
  :hover {
    color: #dc3545;
  }
`;

const SingleComment = styled('div')`
  display: grid;
  grid-template-areas: "image username" 
                       "image text" 
                       "image date";
  grid-template-rows: 25px 2fr 25px;
  grid-template-columns: 1fr 5fr;
  border-bottom: 1px solid grey;
  padding-bottom: 23px; 
  margin: 15px;
`;

const Image = styled('div')`
  grid-area: image;
  border-radius: 100%;
  background-size: cover;
  height: 80px;
`;

const UserName = styled('strong')`
  grid-area: username;
  margin-left: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled('div')`
  grid-area: text;
  display: flex;
  align-items: center;
  margin-left: 15px;
  padding: 10px 0;
`;

const Date = styled('div')`
  grid-area: date;
  margin-left: 15px;
  display: flex;
  align-items: center;
  font-style: italic;
`;

const Comments = ({ postData, removeComment }) => {
  const { comments } = postData;
  const user = localStorage.getItem('id_token') ? decode(localStorage.getItem('id_token')) : '';
  const { name } = user;
  const username = editUsername(name);
  return (
    <CommentsWrap>
      {
        Object
        .keys(comments)
        .sort((a, b) => (b - a))
        .map(comment => (
          <SingleComment key={comment}>
            <Image style={{ backgroundImage: `url(${comments[comment].image})` }} />
            <UserName>
              {comments[comment].username}
              {
                username === comments[comment].username ?
                  <DeleteIcon onClick={() => removeComment(comment)}>X</DeleteIcon> :
                  null
              }
            </UserName>
            <Text>{comments[comment].comment}</Text>
            <Date>{comments[comment].date}</Date>
          </SingleComment>
        ))
      }
    </CommentsWrap>
  );
};

Comments.defaultProps = {
  postData: {
    comments: {},
  },
};

const mapDispatchToProps = dispatch => ({
  deleteComment: bindActionCreators(deleteCommentRequest, dispatch),
});

Comments.propTypes = {
  postData: PropTypes.shape({
    date: PropTypes.string,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    image: PropTypes.string,
    likes: PropTypes.objectOf(PropTypes.any),
    more: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
    user: PropTypes.string,
    comments: PropTypes.shape({
      comments: PropTypes.arrayOf(PropTypes.string),
      date: PropTypes.string,
      image: PropTypes.string,
    }),
  }),
  removeComment: PropTypes.func.isRequired,
};

export default compose(
  connect(null, mapDispatchToProps),
  withHandlers({
    removeComment: ({ deleteComment, postKey }) => (comment) => {
      if (confirm('You sure you want to delete this comment?')) { // eslint-disable-line
        deleteComment(postKey, comment);
      }
    },
  }),
)(Comments);

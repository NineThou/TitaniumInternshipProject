// modules
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import decode from 'jwt-decode';
import { compose, withHandlers, withState } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

// colors
import { grey, blue } from '../styles/colors';

// helpers
import { editUsername } from '../utils/helperFunctions';

// actions
import { deleteCommentRequest } from '../actions/posts-api';
import { isLoggedIn } from '../utils/AuthService';
import RenderTextArea from '../utils/RenderTextArea';
import { maxLength500, minLength15, required } from '../utils/validation';

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

const Edit = styled('strong')`
  cursor: pointer;
  padding: 0 3px;
  border: 3px solid #5DADE2;
  color: #5DADE2;
  border-radius: 3px;
  transition: .4s;
  :hover {
    border-color: ${blue};
    color: ${blue};
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

const Text = css`
  grid-area: text;
  display: flex;
  align-items: center;
  margin-left: 15px;
  padding: 10px 0;
  border-bottom: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  outline: none;
  display: block;
  width: 100%;
  padding: 7px;
  border: none;
  background: transparent;
  margin-bottom: 10px;
  font-size: 20px;
  height: 45px;
  resize:none;
  overflow: hidden;
`;

const Date = styled('div')`
  grid-area: date;
  margin-left: 15px;
  display: flex;
  align-items: center;
  font-style: italic;
  display: flex;
  justify-content: space-between;
`;

const Comments = ({ postData, removeComment, handleSubmit, disabled }) => {
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
                isLoggedIn() && username === comments[comment].username ?
                  <DeleteIcon onClick={() => removeComment(comment)}>X</DeleteIcon> :
                  null
              }
            </UserName>
            <Field className={Text} value={comments[comment].comment} name="comment" type="textarea" component={RenderTextArea} label="enter comment" validate={[required, minLength15, maxLength500]} disabled={disabled} />
            <Date>
              {comments[comment].date}
              {
                username === comments[comment].username ?
                  <Edit>Edit comment</Edit> :
                  null
              }
            </Date>
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

const mapStateToProps = (state, { postKey }) => ({
  initialValues: state.postsInfo.posts[postKey] && state.postsInfo.posts[postKey].comments,
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
  handleSubmit: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('disabled', 'isDisabled', true),
  withHandlers({
    removeComment: ({ deleteComment, postKey }) => (comment) => {
      if (confirm('You sure you want to delete this comment?')) { // eslint-disable-line
        deleteComment(postKey, comment);
      }
    },
    editComment: ({ initialValues }) => (e) => {
      e.preventDefault(e);
      console.log(initialValues);
    },
  }),
  reduxForm({
    onSubmit: (values) => {
      console.log(values);
    },
    form: 'Comment Edit',
  }),
)(Comments);

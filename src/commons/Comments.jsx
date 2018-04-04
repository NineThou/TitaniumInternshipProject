// modules
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import decode from 'jwt-decode';
import { compose, withHandlers, withState } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

// colors
import { grey } from '../styles/colors';

// helpers
import { editUsername } from '../utils/helperFunctions';

// actions
import { deleteCommentRequest } from '../actions/posts-api';
import { isLoggedIn } from '../utils/AuthService';
import TextAreaForComments from '../utils/TextAreaForComments';
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

const Edit = styled('button')`
  font-size: 16px;
  cursor: pointer;
  padding: 1px 3px;
  border: 3px solid #5DADE2;
  color: #5DADE2;
  font-weight: bold;
  font-style: italic;
  background: transparent;
  border-radius: 3px;
  transition: .4s;
  :hover {
    border-color: white;
    color: white;
  }
  margin-left: 5px;
`;

const SubmitButton = styled('button')`
  font-size: 16px;
  cursor: pointer;
  padding: 1px 3px;
  border: 3px solid #58D68D;
  background: transparent;
  font-style: italic;
  font-weight: bold;
  color: #58D68D;
  border-radius: 3px;
  transition: .4s;
  :hover {
    border-color: white;
    color: white;
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

// const Text = css`
//   grid-area: text;
//   display: flex;
//   align-items: center;
//   margin-left: 15px;
//   padding: 10px 0;
//   border-bottom: 0;
//   box-sizing: border-box;
//   -webkit-box-sizing: border-box;
//   -moz-box-sizing: border-box;
//   outline: none;
//   display: block;
//   width: 100%;
//   padding: 7px;
//   border: none;
//   background: transparent;
//   margin-bottom: 10px;
//   font-size: 20px;
//   height: 45px;
//   resize:none;
//   overflow: hidden;
// `;

const Date = styled('div')`
  grid-area: date;
  margin-left: 15px;
  display: flex;
  align-items: center;
  font-style: italic;
  display: flex;
  justify-content: space-between;
`;

const Comments = ({
  postData, removeComment, handleSubmit, disabled, editComment,
}) => {
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
            <Field
              onSubmit={handleSubmit}
              name={`comment:${comment}`}
              type="textarea"
              component={TextAreaForComments}
              label="enter comment"
              validate={[required, minLength15, maxLength500]}
              disabled={disabled}
            />
            <Date>
              {comments[comment].date}
              <div>
                {disabled ? null : <SubmitButton>Submit</SubmitButton>}
                {
                  isLoggedIn() && username === comments[comment].username ?
                    <Edit onClick={editComment}>
                      {disabled ? 'Edit comment' : 'Cancel editing'}
                    </Edit> :
                    null
                }
              </div>
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
  editComment: PropTypes.func.isRequired,
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
    editComment: ({ isDisabled }) => (e) => {
      e.preventDefault(e);
      isDisabled(n => !n);
    },
  }),
  reduxForm({
    onSubmit: (values) => {
      console.log(values);
    },
    form: 'Comment Edit',
  }),
)(Comments);

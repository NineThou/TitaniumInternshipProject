// modules
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import decode from 'jwt-decode';
import { bindActionCreators } from 'redux';

// colors
import { grey } from '../styles/colors';
// helpers
import { editUsername } from '../utils/helperFunctions';

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
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-columns: 1fr 5fr;
  border-bottom: 1px solid grey;
  padding-bottom: 23px; 
  margin: 15px;
`;

const Image = styled('div')`
  grid-area: image;
  border-radius: 100%;
  background-size: cover;
`;

const UserName = styled('div')`
  grid-area: username;
  margin-left: 15px;
  display: flex;
  justify-content: space-between;
`;

const Text = styled('div')`
  grid-area: text;
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

const Date = styled('div')`
  grid-area: date;
  margin-left: 15px;
`;

const Comments = ({ postData }) => {
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
              {username === comments[comment].username ? <DeleteIcon>X</DeleteIcon> : null}
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
};

export default Comments;

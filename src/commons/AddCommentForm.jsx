import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import decode from 'jwt-decode';

// action
import { addCommentRequest } from '../actions/posts-api';

// emotion component
import { NiceForm, Title } from '../styles/emotionComponents';

// components
import MyCustomForm from './MyCustomForm';
import RenderTextArea from '../utils/RenderTextArea';

// redux form validation
import { maxLength500, minLength15 } from '../utils/validation';

// helper function
import { editUsername } from '../utils/helperFunctions';

const data = [
  {
    name: 'comment',
    type: 'textarea',
    component: RenderTextArea,
    label: 'comment',
    validate: [
      minLength15,
      maxLength500,
    ],
  },
];

const AddCommentForm = ({ handleSubmit }) => (
  <NiceForm>
    <Title>Add comment</Title>
    <MyCustomForm data={data} handleSubmit={handleSubmit} />
  </NiceForm>
);

AddCommentForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  onSubmit: (values, dispatch, { postKey }) => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    const month = date.toLocaleDateString('en-US');
    const user = localStorage.getItem('id_token') ? decode(localStorage.getItem('id_token')) : '';
    const image = user.picture;
    const username = editUsername(user.name);
    const commentData = {
      ...values, image, username, date: `${time} ${month}`,
    };
    dispatch(addCommentRequest(postKey, commentData));
  },
  form: 'Post Comments',
})(AddCommentForm);

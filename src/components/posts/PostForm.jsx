import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { setPostsRequest } from '../../actions/posts-api';

const PostForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">
          Title
          <Field name="title" component="input" type="text" />
        </label>
      </div>
      <div>
        <label htmlFor="text">
          Deription
          <Field name="text" component="textarea" />
        </label>
      </div>
      <div>
        <label htmlFor="more">How to cook info:
          <Field name="more" component="textarea" />
        </label>
      </div>
      <div>
        <label htmlFor="image">Paste image src here:
          <Field name="image" component="input" type="text" />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const MyPostForm = reduxForm({
  onSubmit: (values, dispatch, { id }) => {
    const data = { ...values, id, likes: 0 };
    console.log(data);
    dispatch(setPostsRequest(data));
  },
  form: 'PostForm',
})(PostForm);

export default MyPostForm;

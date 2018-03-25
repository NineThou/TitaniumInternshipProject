import React from 'react';
import { Field, reduxForm } from 'redux-form';

const PostForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit(e => props.postSubmit(e))}>
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

export default reduxForm({
  form: 'PostForm',
})(PostForm);
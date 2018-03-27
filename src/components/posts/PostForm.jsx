import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import decode from 'jwt-decode';
import { setPostsRequest } from '../../actions/posts-api';
import RenderField from '../../utils/RenderField';
import { required, minLength15, minLength4 } from '../../utils/validation';


const PostForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="title" component={RenderField} type="text" label="Title" validate={[required, minLength4]} />
      </div>
      <div>
        <Field name="text" component={RenderField} type="textarea" label="Description" validate={[required, minLength15]} />
      </div>
      <div>
        <Field name="more" component={RenderField} type="textarea" label="How to cook" validate={[required, minLength15]} />
      </div>
      <div>
        <Field name="image" component={RenderField} type="text" label="Image" validate={required} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

PostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  onSubmit: (values, dispatch, { id }) => {
    let date = new Date();
    let time = date.toLocaleTimeString();
    let month = date.toLocaleDateString('en-US')
    const user = localStorage.getItem('id_token') ? decode(localStorage.getItem('id_token')) : '';
    const data = { ...values, id, likes: 0, user: user.nickname, date: `${time} ${month}` };
    dispatch(setPostsRequest(data));
  },
  form: 'PostForm',
})(PostForm);

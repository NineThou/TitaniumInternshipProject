import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import decode from 'jwt-decode';
import { setPostsRequest } from '../../actions/posts-api';
import RenderField from '../../utils/RenderField';
import RenderTextArea from '../../utils/RenderTextArea';
import { required, minLength15, minLength4 } from '../../utils/validation';


const PostForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field name="title" component={RenderField} type="text" label="Title" validate={[required, minLength4]} />
    </div>
    <div>
      <Field name="text" component={RenderTextArea} type="textarea" label="Description" validate={[required, minLength15]} />
    </div>
    <div>
      <Field name="more" component={RenderTextArea} type="textarea" label="How to cook" validate={[required, minLength15]} />
    </div>
    <div>
      <Field name="image" component={RenderField} type="text" label="Image" validate={required} />
    </div>
    <button type="submit">Submit</button>
  </form>
);

PostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  onSubmit: (values, dispatch, { id }) => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    const month = date.toLocaleDateString('en-US');
    const user = localStorage.getItem('id_token') ? decode(localStorage.getItem('id_token')) : '';
    const data = {
      ...values, id, likes: { blankLike: 'blankLike' }, user: user.nickname, date: `${time} ${month}`,
    };
    dispatch(setPostsRequest(data));
    /* eslint-disable no-param-reassign */
    Object.keys(values).map(item => delete values[item]);
    /* eslint-enable no-param-reassign */
  },
  form: 'PostForm',
  // initialValues: {
  //   title: 'njmbhm',
  //   text: 'bhgnkjhjdasdasdasdasdasd',
  //   more: 'dsadasdasdasdasdasdasddsa',
  //   image: 'https://occ-0-2433-1001.1.nflxso.net/art/70ca4/a4f281c8b0db74f8c09cb25c05647a59c2070ca4.jpg',
  // },
})(PostForm);

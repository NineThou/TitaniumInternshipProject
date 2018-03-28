import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import decode from 'jwt-decode';
import { setEventsRequest } from '../../actions/events-api';
import RenderField from '../../utils/RenderField';
import RenderTextArea from '../../utils/RenderTextArea';
import { required, minLength15, minLength4, splitWithCommas } from '../../utils/validation';


const EventForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="title" component={RenderField} type="text" label="Title" validate={[required, minLength4]} />
      </div>
      <div>
        <Field name="body" component={RenderTextArea} type="textarea" label="Body" validate={[required, minLength15]} />
      </div>
      <div>
        <Field name="more" component={RenderTextArea} type="textarea" label="Text" validate={[required, minLength15]} />
      </div>
      <div>
        <Field name="tags" component={RenderField} type="text" label="Tags" validate={[required, splitWithCommas]} />
      </div>
      <div>
        <Field name="image" component={RenderField} type="text" label="Image" validate={required} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

EventForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  onSubmit: (values, dispatch, { id }) => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    const month = date.toLocaleDateString('en-US');
    const user = localStorage.getItem('id_token') ? decode(localStorage.getItem('id_token')) : '';
    const tags = values.tags.split(', ');
    const data = {
      id,
      likes: 0,
      user: user.nickname,
      ...values,
      tags,
      date: `${time} ${month}`,
    };
    dispatch(setEventsRequest(data));
  },
  form: 'EventForm',
})(EventForm);
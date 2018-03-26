import React from 'react';
import { Field, reduxForm } from 'redux-form';

const required = value => (
  value ? undefined : 'Required'
);
const minLength = min => value => (
  value && value.length < min ? `Must be ${min} characters atleast` : undefined
);
const minLength4 = minLength(4);
const minLength15 = minLength(15);

const renderField = ({ input, label, type, meta: {touched, error, warning } }) => (
  <div>
    <label htmlFor="title">
      {label}
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>))}
    </label>
  </div>
);

const PostForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit(e => props.postSubmit(e))}>
      <div>
        <Field name="title" component={renderField} type="text" label="Title" validate={[required, minLength4]} />
      </div>
      <div>
        <Field name="text" component={renderField} type="textarea" label="Description" validate={[required, minLength15]} />
      </div>
      <div>
        <Field name="more" component={renderField} type="textarea" label="How to cook" validate={[required, minLength15]} />
      </div>
      <div>
        <Field name="image" component={renderField} type="text" label="Image" validate={required} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({
  form: 'PostForm',
})(PostForm);

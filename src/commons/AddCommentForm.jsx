import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';

// emotion component
import { NiceForm, Title } from '../styles/emotionComponents';

// components
import MyCustomForm from './MyCustomForm';
import RenderTextArea from '../utils/RenderTextArea';
import { maxLength500, minLength15 } from '../utils/validation';

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

export default compose(
  reduxForm({
    onSubmit: (values, dispatch) => {
      console.log(values);
    },
  }),
)(AddCommentForm);

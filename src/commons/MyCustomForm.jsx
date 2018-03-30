import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { Submit, formField } from './../styles/emotionComponents';

const MyCustomForm = ({ data, handleSubmit }) => (
  <form className={formField} onSubmit={handleSubmit}>
    {
      data.map(item => (
        <div key={item.name}>
          <Field
            name={item.name}
            component={item.component}
            type={item.type}
            label={item.label}
            validate={item.validate}
          />
        </div>
      ))
    }
    <Submit type="submit">Submit</Submit>
  </form>
);

MyCustomForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default MyCustomForm;

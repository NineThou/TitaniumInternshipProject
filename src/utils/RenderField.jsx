import React from 'react';
import PropTypes from 'prop-types';

const RenderField = ({
  input,
  label,
  type,
  meta: {
    touched,
    error,
  },
}) => (
  <div>
    <label htmlFor="title">
      {label}
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>))}
    </label>
  </div>
);

RenderField.propTypes = {
  input: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
  }),
};

RenderField.defaultProps = {
  meta: PropTypes.shape({
    error: '',
    touched: false,
  }),
};

export default RenderField;

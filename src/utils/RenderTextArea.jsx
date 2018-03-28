import React from 'react';
import PropTypes from 'prop-types';
import { TextArea } from 'semantic-ui-react';

const RenderTextArea = ({
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
      <TextArea rows={2} {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>))}
    </label>
  </div>
);

RenderTextArea.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
  }),
};

RenderTextArea.defaultProps = {
  meta: PropTypes.shape({
    error: '',
    touched: false,
  }),
};

export default RenderTextArea;

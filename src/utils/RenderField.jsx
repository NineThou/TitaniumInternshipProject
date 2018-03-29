import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Error = styled('span')`
  color: #dc3545;
  border: 2px solid #dc3545;
  border-radius: 3px;
  width: 100%;
  padding: 3px;
  text-align: center;
`;

const InputText = styled('input')`
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  outline: none;
  display: block;
  width: 100%;
  padding: 7px;
  border: none;
  border-bottom: 1px solid #ddd;
  background: transparent;
  margin-bottom: 10px;
  font-size: 20px;
  height: 40px;
`;

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
      <InputText {...input} placeholder={label} type={type} />
      {touched && ((error && <Error>{error}</Error>))}
    </label>
  </div>
);

RenderField.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
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

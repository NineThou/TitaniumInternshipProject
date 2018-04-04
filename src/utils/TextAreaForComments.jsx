import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import TextareaAutosize from 'react-autosize-textarea';

const TextareaForComments = css`
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  outline: none;
  display: flex;
  width: 300px;
  padding: 15px 0;
  border: none;
  background: transparent;
  margin: 10px 15px;
  font-size: 16px;
  height: 45px;
  resize:none;
  overflow: hidden;
  grid-area: text;
  align-items: center;
`;

const TextAreaForCommentsActive = css`
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  outline: none;
  display: flex;
  width: 100%;
  padding-top: 15px;
  border: 2px solid #5DADE2;
  background: transparent;
  margin: 10px 15px;
  font-size: 16px;
  height: 45px;
  resize:none;
  overflow: hidden;
  grid-area: text;
  align-items: center;
`;

const Error = styled('span')`
  color: #dc3545;
  border: 2px solid #dc3545;
  border-radius: 3px;
  width: 100%;
  padding: 0 3px;
  margin: 0 15px;
  text-align: center;
`;

const TextAreaForComments = ({
  input,
  label,
  type,
  meta: {
    touched,
    error,
  },
  disabled,
}) => (
  <div>
    <label htmlFor="title">
      {!disabled ? touched && ((error && <Error>{error}</Error>)) : null}
      <TextareaAutosize
        rows={2}
        {...input}
        placeholder={label}
        type={type}
        disabled={disabled}
        className={disabled ? TextareaForComments : TextAreaForCommentsActive}
      />
    </label>
  </div>
);

TextAreaForComments.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
  }),
  disabled: PropTypes.bool,
};

TextAreaForComments.defaultProps = {
  meta: PropTypes.shape({
    error: '',
    touched: false,
  }),
  disabled: true,
};

export default TextAreaForComments;


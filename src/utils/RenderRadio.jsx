import React from 'react';
import { Radio } from 'semantic-ui-react';
import { css } from 'react-emotion';
import PropTypes from 'prop-types';

const RadioDish = css`
  position: center;
  padding: 20px 65px 20px 65px;
  font-size: 15px !important;
`;


const RenderRadio = ({ input }) => {
  function handleChange(e, { value }) {
    return input.onChange(value);
  }
  return (
    <div>
      <Radio
        className={RadioDish}
        label="Cold dish"
        value="cold"
        name="dishtype"
        onChange={handleChange}
      />
      <Radio
        className={RadioDish}
        label="Hot dish"
        name="dishtype"
        value="hot"
        onChange={handleChange}
      />
    </div>
  );
};

RenderRadio.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default RenderRadio;

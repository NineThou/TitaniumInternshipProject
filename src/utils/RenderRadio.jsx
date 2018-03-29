import React from 'react';
import { Radio } from 'semantic-ui-react';
import { css } from 'react-emotion';
import PropTypes from 'prop-types';

const RadioDish = css`
  position: center;
  padding: 20px 65px 20px 65px;
  font-size: 15px !important;
`;


class RenderRadio extends React.Component {
  state = {
    value: '',
  };
  handleChange = (e, { value }) => {
    this.setState({ value });
    console.log(this.state)
    console.log(value, this.props.input);
    return this.props.input.onChange(this.props.input.value);
  }
  render() {
    return (
      <div>
        <Radio
          {...this.props.input}
          className={RadioDish}
          label="Cold dish"
          value="cold"
          name="dishtype"
          checked={this.state.value === 'cold'}
          onChange={this.handleChange}
        />
        <Radio
          {...this.props.input}
          className={RadioDish}
          label="Hot dish"
          name="dishtype"
          value="hot"
          checked={this.state.value === 'hot'}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

RenderRadio.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default RenderRadio;

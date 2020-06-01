import React from 'react';
import { Radio } from 'semantic-ui-react';
import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';

const RadioDish = css`
  position: center;
  padding: 20px 65px 20px 65px;
  font-size: 15px !important;
`;

const Error = styled('span')`
  color: #dc3545;
  border: 2px solid #dc3545;
  border-radius: 3px;
  width: 100%;
  padding: 3px;
  text-align: center;
  margin: 20px 180px;
`;


class RenderRadio extends React.Component {
  state = {
    value: '',
  };
  handleChange = (e, { value }) => {
    this.setState({ value });
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
        {this.props.meta.touched &&
           ((this.props.meta.error && <Error>{this.props.meta.error}</Error>))}
      </div>
    );
  }
}

RenderRadio.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
  }),
};

RenderRadio.defaultProps = {
  meta: PropTypes.shape({
    error: '',
    touched: false,
  }),
};

export default RenderRadio;

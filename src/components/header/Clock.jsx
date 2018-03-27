import React from 'react';
import styled from 'react-emotion';
import { compose, lifecycle, withHandlers, withState } from 'recompose';
import PropTypes from 'prop-types';

const ClockContent = styled('h2')`
  margin-right: 10px;
  @media(max-width: 1068px) {
    font-size: 17px;
  }
  @media (max-width: 800px) {
    display: none;
  }
  @media (max-width: 462px) {
    font-size: 15px;
  }
  @media (max-width: 384px) {
    font-size: 14px;
  }
`;

const getMonth = () => {
  const today = new Date();
  return today.toLocaleDateString('en-US', { month: 'long' });
};

const Clock = ({ date }) => (
  <div>
    <ClockContent>{`${date.toLocaleTimeString()}, ${getMonth()}, ${date.getFullYear()}`}.</ClockContent>
  </div>
);

Clock.propTypes = {
  date: PropTypes.shape({
    toLocaleTimeString: PropTypes.func.isRequired,
    getFullYear: PropTypes.func.isRequired,
  }).isRequired,
};

export default compose(
  withState('date', 'tick', new Date()),
  withHandlers({
    tick: ({ tick }) => () => {
      tick(new Date());
    },
  }),
  lifecycle({
    componentDidMount() {
      this.timerID = setInterval(
        () => this.props.tick(),
        1000,
      );
    },
    componentWillUnmount() {
      clearInterval(this.timerID);
    },
  }),
)(Clock);

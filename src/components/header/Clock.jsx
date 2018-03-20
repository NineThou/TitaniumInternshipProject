import React from 'react';
import styled from 'react-emotion';

const ClockContent = styled('h2')`
  margin-right: 10px;
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

class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div>
        <ClockContent>{`${this.state.date.toLocaleTimeString()}, ${getMonth()}, ${this.state.date.getFullYear()}`}.</ClockContent>
      </div>
    );
  }
}

export default Clock;

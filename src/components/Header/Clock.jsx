import React from 'react';
import styled from 'react-emotion';

const ClockContent = styled('h2')`
  @media (max-width: 800px) {
    font-size: 20px;
  }
  @media (max-width: 462px) {
    font-size: 15px;
  }
  @media (max-width: 384px) {
    font-size: 14px;
  }
`;

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

  getMonth() {
    const month = this.state.date.getMonth();
    switch (month) {
      case 0: return 'January';
      case 1: return 'February';
      case 2: return 'March';
      case 3: return 'April';
      case 4: return 'May';
      case 5: return 'June';
      case 6: return 'July';
      case 7: return 'August';
      case 8: return 'September';
      case 9: return 'October';
      case 10: return 'November';
      case 11: return 'December';
      default: return '???';
    }
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div>
        <ClockContent>{`${this.state.date.toLocaleTimeString()}, ${this.getMonth()}, ${this.state.date.getFullYear()}`}.</ClockContent>
      </div>
    );
  }
}

export default Clock;

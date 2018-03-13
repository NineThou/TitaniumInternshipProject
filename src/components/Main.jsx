import React from 'react';
import Sidebar from 'react-sidebar';
import styled from 'react-emotion';
import SidebarContent from './sidebar/SidebarContent';

const mql = global.window.matchMedia('(min-width: 800px)');

const Bar = styled('div')`
  width: 35px;
  height: 5px;
  background-color: white;
  margin: 6px 0;
  transition: 0.4s;
`;

const ToggleButton = styled('button')`
  background: none;
  border: none;
  outline: none;
  position: absolute;
  top: 10px;
  right: 0;
  z-index: 999;
  :hover {
    cursor: pointer;
  }

  >:nth-child(1).change {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }

  >:nth-child(2).change {
    opacity: 0;
  }

  >:nth-child(3).change {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }

  @media (min-width: 800px) {
    display: none;
  }
  
`;


class Main extends React.Component {
  state = {
    open: this.props.open,
    mql,
    change: false,
  };

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({ mql, sidebarDocked: mql.matches });
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }


  onSetOpen = open => this.setState({ open });

  mediaQueryChanged = () => this.setState({ sidebarDocked: this.state.mql.matches });

  menuButtonClick = () => {
    this.onSetOpen(!this.state.open);
    this.setState({
      change: !this.state.change,
    });
  }

  render() {
    const { children } = this.props;

    return (
      <Sidebar
        sidebar={<SidebarContent />}
        open={this.state.open}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetOpen}
      >
        <ToggleButton onClick={this.menuButtonClick}>
          <Bar className={this.state.open ? 'change' : ''} />
          <Bar className={this.state.open ? 'change' : ''} />
          <Bar className={this.state.open ? 'change' : ''} />
        </ToggleButton>
        {children}
      </Sidebar>
    );
  }
}

export default Main;

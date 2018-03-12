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
`;

const ToggleButton = styled('button')`
  background: none;
  border: none;
  outline: none;
  :hover {
    cursor: pointer;
  }
  @media (min-width: 800px) {
    display: none;
  }
`;

class Main extends React.Component {
  state = {
    open: this.props.open,
    mql,
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

  menuButtonClick = () => this.onSetOpen(!this.state.open);


  render() {
    const { children } = this.props

    return (
      <Sidebar
        sidebar={<SidebarContent />}
        open={this.state.open}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetOpen}
      >
        <ToggleButton onClick={this.menuButtonClick}>
          <Bar />
          <Bar />
          <Bar />
        </ToggleButton>
        {children}
      </Sidebar>
    );
  }
}

export default Main;

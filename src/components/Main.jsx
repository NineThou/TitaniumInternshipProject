import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import SidebarContent from './sidebar/SidebarContent';
import styled from 'react-emotion';

const mql = window.matchMedia(`(min-width: 800px)`);

const Bar = styled('div')`
    width: 35px;
    height: 5px;
    background-color: white;
    margin: 6px 0;
`
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
`

class Main extends React.Component {
  state = {
    open: this.props.open,
    docked: this.props.docked,
    mql: mql,
  }
  
  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, sidebarDocked: mql.matches});
  }
  
  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }
  
  mediaQueryChanged = () => {
    this.setState({sidebarDocked: this.state.mql.matches});
  }
  
  onSetOpen = (open) => {
    this.setState({open: open});
  }
  
  menuButtonClick = (e) => {
    e.preventDefault();
    this.onSetOpen(!this.state.open);
  }

  
  render() {
    const { children } = this.props
    var sidebarProps = {
      sidebar: this.state.sidebarOpen,
      docked: this.state.sidebarDocked,
      onSetOpen: this.onSetSidebarOpen
    };

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

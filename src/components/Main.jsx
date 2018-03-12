import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import SidebarContent from './sidebar/SidebarContent';

const mql = window.matchMedia(`(min-width: 800px)`);


class Main extends React.Component {
  state = {
    open: false,
    docked: false,
    shadow: true,
    drawToggleDistance: 30,
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
    const sidebar = <SidebarContent />

    return (
      <Sidebar
        sidebar={sidebar}
        open={this.state.open}
        docked={this.state.docked}
        onSetOpen={this.onSetOpen}
      >
        <a onClick={this.menuButtonClick} href="#">=</a>
      </Sidebar>
    )
  }
}

export default Main;

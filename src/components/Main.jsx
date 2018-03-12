import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import SidebarContent from './sidebar/SidebarContent';

const mql = window.matchMedia(`(min-width: 800px)`);


class Main extends React.Component {
  state = {
    open: this.props.open,
    docked: this.props.docked,
    mql,
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql, sidebarDocked: mql.matches});
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged = () => this.setState({sidebarDocked: this.state.mql.matches})

  onSetOpen = open => this.setState({open})

  menuButtonClick = () => this.onSetOpen(!this.state.open)


  render() {
    const sidebar = <SidebarContent />

    return (
      <Sidebar
        sidebar={sidebar}
        open={this.state.open}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetOpen}
      >
        <button onClick={this.menuButtonClick}>=</button>
      </Sidebar>
    )
  }
}

export default Main;

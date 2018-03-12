import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
  const { activeItem } = this.state;
    return (
      <Menu inverted icon="labeled">
        <NavLink to="/">
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}>
            <Icon name='home' size='tiny'/>
          </Menu.Item>
        </NavLink>
        <NavLink to="/login">
          <Menu.Item
            name="Login"
            active={activeItem === 'Login'}
            onClick={this.handleItemClick}
          />
        </NavLink>
        <NavLink to="/signup">
          <Menu.Item
            name="SignUp"
            active={activeItem === 'SignUp'}
            onClick={this.handleItemClick}
          />
        </NavLink>
        <NavLink to="/events">
          <Menu.Item
            name="Events"
            active={activeItem === 'Events'}
            onClick={this.handleItemClick}
          />
        </NavLink>
        <NavLink to="/posts">
          <Menu.Item
            name="Posts"
            active={activeItem === 'Posts'}
            onClick={this.handleItemClick}
          />
        </NavLink>
        <NavLink to="/users">
          <Menu.Item
            name="Users"
            active={activeItem === 'Users'}
            onClick={this.handleItemClick}
          />
        </NavLink>
      </Menu>
    );
  }
}


export default NavBar;

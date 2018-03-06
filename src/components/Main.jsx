import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Main extends React.Component {

    render() {
      return (
        <Menu inverted>
          <NavLink to='/home'>
            <Menu.Item
              name='home'
              activeClassName='active'
            />
          </NavLink>
          <NavLink to='/login'>
            <Menu.Item 
              name='Login' 
              activeClassName='active'
            />
          </NavLink>
          <NavLink to='/signup'>
            <Menu.Item 
              name='SignUp' 
              activeClassName='active'
            />
          </NavLink>
        </Menu>
    )
  }
}

export default Main;
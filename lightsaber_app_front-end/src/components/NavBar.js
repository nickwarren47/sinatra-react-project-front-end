import React from "react";
import { Menu, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

function NavBar() {
    return(
    <Menu className='menu' inverted>
      <Menu.Item>
        <Link to="/">
          <Icon name="home" />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/users">
          <Icon name="users" />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/jedi">
          <Icon name="star" />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/sith">
          <Icon name="fire" />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/user-form">
          <Icon name="clipboard" />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/aboutus">
          <Icon name="address book" />
        </Link>
      </Menu.Item>
    </Menu>
    )
}

export default NavBar;
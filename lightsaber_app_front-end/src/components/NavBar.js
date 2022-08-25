import React from "react";
import { Menu, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

function NavBar() {
    return(
    <Menu className='menu'>
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
    </Menu>
    )
}

export default NavBar;
import React from "react";
import { Menu, Icon, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

function NavBar() {
    return(
    <Menu className='menu' inverted>
      <Menu.Item>
        <Link to="/">
          <Icon name="home" size="huge" />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/users">
          <Button color="white" size="huge">All Users</Button>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/jedi">
          <Button color="blue" size="huge">All Jedis</Button>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/sith">
          <Button color="red" size="huge">All Siths</Button>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Button.Group>
          <Link to="/addjediuser">
            <Button color='blue' size="huge">Become Jedi</Button>
          </Link>
            <Button.Or />
          <Link to="/addsithuser">
            <Button color='red' size="huge">Become Sith</Button>
          </Link>
          </Button.Group>
       </Menu.Item> 
       <Menu.Item>
        <Link to="/lightsaber">
          <Icon size="huge" name="lightning" />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/lightsaber_blade">
          <Icon size="huge" name="minus" />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/aboutus">
          <Icon name="address book" size="huge" />
        </Link>
      </Menu.Item>
    </Menu>
    )
}

export default NavBar;
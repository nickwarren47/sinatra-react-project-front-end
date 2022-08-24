import React, {useEffect, useState} from "react";
import NavBar from './NavBar';
import Search from './Search';
import Users from './Users'

function App() {
  const [users, setUsers] = useState([])
  const [searchUsers, setSearchUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/user')
    .then(res => res.json())
    .then((users) => setUsers(users))
  }, [])
  
  // const jediArray = users.filter((user) => users.jedi_or_sith === "Jedi")
  // const sithArray = users.filter((user) => users.jedi_or_sith === "Sith")

  const displayedUsers = users.filter((user) => 
    user.first_name.toLowerCase().includes(searchUsers.toLowerCase())
    );
  // const displayedUserTiles = jediArray
  // .filter((mac) => selectedCategory === "All" || mac.category === selectedCategory)
  // .filter((macTile) => macTile.action.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Search search={searchUsers} onSearchChange={setSearchUsers}/>
        <Users users={users}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

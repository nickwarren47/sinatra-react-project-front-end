import React, {useEffect, useState} from "react";
import NavBar from './NavBar';
import Homepage from "./Homepage";

function App() {
//   const [users, setUsers] = useState([])

//   useEffect(() => {
//     fetch('http://localhost:9292/user')
//     .then(res => res.json())
//     .then((users) => setUsers(users))
//   }, [])

  // const displayedUsers = users.filter((user => 
  //   user.first_name.toLowerCase().includes(search.toLowerCase()))
  // );

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
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
      <Homepage/>
    </div>
  );
}

export default App;

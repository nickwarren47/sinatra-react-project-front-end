import React from "react"; 
import { useState, useEffect } from "react";
import NavBar from './NavBar';
// import Search from './Search';
import Homepage from './Homepage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Users from './Users'
import Jedi from './JediListing'
import Sith from './SithListing'
import AboutUs from './AboutUs'
import AddJediUser from "./AddJediUser"; 
import AddSithUser from "./AddSithUser"; 

function App() {
  // const [searchUsers, setSearchUsers] = useState([])

  // const jediArray = users.filter((user) => users.jedi_or_sith === "Jedi")
  // const sithArray = users.filter((user) => users.jedi_or_sith === "Sith")

  // const displayedUsers = users.filter((user) => 
  //   user.first_name.toLowerCase().includes(searchUsers.toLowerCase())
  //   );
  // const displayedJediTiles = jediArray
  // .filter((jedi) => selectedCategory === "All" || mac.category === selectedCategory)
  // .filter((macTile) => macTile.action.toLowerCase().includes(searchQuery.toLowerCase())
  // );  
  const [users, setUsers] = useState([]); 

  function postNewJediUser(postReqObj) {

    fetch("http://localhost:9292/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postReqObj),
      })
        .then((r) => r.json())
        .then((newJediUser) => setUsers([...users, newJediUser]));  
  } 

  function postNewSithUser(postReqObj) {
    fetch("http://localhost:9292/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postReqObj),
      })
        .then((r) => r.json())
        .then((newSithUser) => setUsers([...users, newSithUser]));  
  } 

  function onUserDelete(userId) {
    const updatedUsers = users.filter((user) => user.id !== userId)
    setUsers(updatedUsers); 
  }

  useEffect(() => {
    fetch('http://localhost:9292/users')
    .then(res => res.json())
    .then((users) => setUsers(users))
  }, [])


  function handleAddUser(newUser){
    setAddUser([...users, newUser])
  }


  return (
    <div>
      <header id="star">
      <img id="banner-img" src="/banner.gif" alt="banner" class="center"/>
      {/* <img id="star-background" src="/background.gif" alt="background-stars"/> */}
      </header>
      <body id="app-body">
        <Router >
        <NavBar />
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/users' element={<Users users={users} onUserDelete={onUserDelete}/>}/>
          <Route path='/jedi' element={<Jedi/>}/>
          <Route path='/sith' element={<Sith/>}/>
          <Route path='/addjediuser' element={<AddJediUser postNewJediUser={postNewJediUser}/>}/> 
          <Route path='/addsithuser' element={<AddSithUser postNewSithUser={postNewSithUser}/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
        {/* <Search search={searchUsers} onSearchChange={setSearchUsers}/> */}
        </Routes>
        </Router>
      </body>


    </div>
  );
}

export default App;

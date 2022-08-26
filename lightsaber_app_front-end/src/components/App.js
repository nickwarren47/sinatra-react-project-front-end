import React from "react";
import NavBar from './NavBar';
// import Search from './Search';
import Homepage from './Homepage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Users from './Users'
import Jedi from './JediListing'
import Sith from './SithListing'
import AboutUs from './AboutUs'
import AddUser from "./AddUser";

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

  return (
    <div>
      <header>

      </header>
      <body id="app-body">
        <Router >
        <NavBar />
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/jedi' element={<Jedi/>}/>
          <Route path='/sith' element={<Sith/>}/>
          <Route path='/adduser' element={<AddUser/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
        {/* <Search search={searchUsers} onSearchChange={setSearchUsers}/> */}
        </Routes>
        </Router>
      </body>


    </div>
  );
}

export default App;

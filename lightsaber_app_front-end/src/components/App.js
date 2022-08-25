import React from "react";
import NavBar from './NavBar';
// import Search from './Search';
import Homepage from './Homepage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Users from './Users'

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
        <Router >
        <NavBar />
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/users' element={<Users/>}/>
        {/* <Search search={searchUsers} onSearchChange={setSearchUsers}/> */}
        </Routes>
        </Router>
      </header>


    </div>
  );
}

export default App;

import React, {useEffect, useState} from "react";
import './App.css';

function App() {
  const [users, setUsers] = useState([])



  useEffect(() => {
    fetch('http://localhost:9292/user')
    .then(res => res.json())
    .then((users) => setUsers(users))
  }, [])


  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;

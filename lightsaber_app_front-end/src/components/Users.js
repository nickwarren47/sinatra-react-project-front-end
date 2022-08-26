import React, {useEffect, useState} from "react";
import UserCard from "./UserCard"
import { Card } from "semantic-ui-react";


function Users(){

    
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:9292/users')
        .then(res => res.json())
        .then((users) => setUsers(users))
      }, [])
    
      const userCards = users
        .map(user => {
            return(
                <UserCard key={user.id} user={user} />
            )
        })

    return(
        <div className="users-display">
            <Card.Group itemsPerRow={4}>
                {userCards}
            </Card.Group>
    
        </div>
    )
}


export default Users

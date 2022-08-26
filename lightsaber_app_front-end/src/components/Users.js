import UserCard from "./UserCard"
import { Card } from "semantic-ui-react";


function Users({ users, onUserDelete }){    
  const userCards = users.map(user => (
    <UserCard onUserDelete={onUserDelete} key={user.id} user={user} />
  ))

  return (
    <div className="users-display">
        <Card.Group itemsPerRow={4}>
            {userCards}
        </Card.Group>
    </div>
  )
}


export default Users

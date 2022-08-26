import { Card, Button } from "semantic-ui-react";


function UserCard ({user, onUserDelete}) {

  function onUserRemoveClick() {
    fetch(`http://localhost:9292/users/${user.id}`, {
      method: "DELETE",
    });

    onUserDelete(user.id)
  }

    return(
        <Card>
        <div className="card-img-container">
                    <img 
                        className="card-img"
                        src={user.image_url} 
                        size="small"
                        alt="user"/>
                </div>
        <Card.Content>
          <Card.Header>{user.first_name} {user.last_name}</Card.Header>
          <Card.Meta>
            <span className='jedi'>Jedi or Sith: {user.jedi_or_sith}</span>
          </Card.Meta>
          <Card.Description>
            Species: {user.species}
          </Card.Description>
        </Card.Content>
        <Button size="large" onClick={onUserRemoveClick}>Remove</Button>
      </Card>
    )
}

export default UserCard;
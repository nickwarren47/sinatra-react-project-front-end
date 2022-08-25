import { Card} from "semantic-ui-react";

function UserCard ({user}) {

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
      </Card>
    )
}

export default UserCard;
import { Card} from "semantic-ui-react";

function JediCard ({jedi}) {
// const {first_name, last_name, image_url, jedi_or_sith, species} = user

    return(
        <Card>
        <div className="card-img-container-jedi">
                    <img 
                        className="card-img"
                        src={jedi.image_url} 
                        size="small"
                        alt="user"/>
                </div>
        {/* <Image src={image_url} wrapped ui={false} /> */}
        <Card.Content>
          <Card.Header>{jedi.first_name} {jedi.last_name}</Card.Header>
          <Card.Meta>
            <span className='jedi'>Jedi or Sith: {jedi.jedi_or_sith}</span>
          </Card.Meta>
          <Card.Description>
            Species: {jedi.species}
          </Card.Description>
        </Card.Content>
      </Card>
    )
}

export default JediCard;
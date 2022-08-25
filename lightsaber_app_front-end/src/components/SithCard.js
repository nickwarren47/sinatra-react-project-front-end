import { Card} from "semantic-ui-react";

function SithCard ({sith}) {
// const {first_name, last_name, image_url, jedi_or_sith, species} = user

    return(
        <Card>
        <div className="card-img-container-sith">
                    <img 
                        className="card-img"
                        src={sith.image_url} 
                        size="small"
                        alt="user"/>
                </div>
        {/* <Image src={image_url} wrapped ui={false} /> */}
        <Card.Content>
          <Card.Header>{sith.first_name} {sith.last_name}</Card.Header>
          <Card.Meta>
            <span className='sith'>Jedi or Sith: {sith.jedi_or_sith}</span>
          </Card.Meta>
          <Card.Description>
            Species: {sith.species}
          </Card.Description>
        </Card.Content>
      </Card>
    )
}

export default SithCard;
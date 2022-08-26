import { Card} from "semantic-ui-react";

function LightsaberCard ({lightsaber}) {
// const {first_name, last_name, image_url, jedi_or_sith, species} = user

    return(
        <Card>
        <div className="card-img-container-lightsaber">
                    <img 
                        className="card-img"
                        src={lightsaber.image_url} 
                        size="small"
                        alt="user"/>
                </div>
        {/* <Image src={image_url} wrapped ui={false} /> */}
        <Card.Content>
          <Card.Header>{lightsaber.color_name}</Card.Header>
          <Card.Description>
            Symbolism with Color: {lightsaber.symbolism}
          </Card.Description>
        </Card.Content>
      </Card>
    )
}

export default LightsaberCard;
import { Card} from "semantic-ui-react";

function LitBladeCard ({blade}) {
// const {first_name, last_name, image_url, jedi_or_sith, species} = user

    return(
        <Card>
        <div className="card-img-container-blade">
                    <img 
                        className="card-img"
                        src={blade.image_url} 
                        size="small"
                        alt="user"/>
                </div>
        {/* <Image src={image_url} wrapped ui={false} /> */}
        <Card.Content>
          <Card.Header>{blade.blade_name}</Card.Header>
        </Card.Content>
      </Card>
    )
}

export default LitBladeCard;
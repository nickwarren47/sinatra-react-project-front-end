import React, {useEffect, useState} from "react";
import { Card } from "semantic-ui-react";
import LightsaberCard from './LightsaberCard'


function Lightsaber(){
    const [lightsaber, setLightsaber] = useState([])
    useEffect(() => {
        fetch('http://localhost:9292/lightsaber_color')
        .then(res => res.json())
        .then((lightsaber) => setLightsaber(lightsaber))
      }, [])
    
      const lightsaberCards = lightsaber
        .map(lightsaber => {
            return(
                <LightsaberCard key={lightsaber.id} lightsaber={lightsaber} />
            )
        })

    return(
        <div className="lightsaber-display">
            <Card.Group itemsPerRow={3}>
                {lightsaberCards}
            </Card.Group>
        </div>
    )
}

export default Lightsaber
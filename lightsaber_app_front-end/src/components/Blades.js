import React, {useEffect, useState} from "react";
import { Card } from "semantic-ui-react";
import LitBladeCard from './LitBladeCard'


function Blades(){
    const [blade, setBlade] = useState([])
    useEffect(() => {
        fetch('http://localhost:9292/lightsaber_blade')
        .then(res => res.json())
        .then((blade) => setBlade(blade))
      }, [])
    
      const bladeCards = blade
        .map(blade => {
            return(
                <LitBladeCard key={blade.id} blade={blade} />
            )
        })
    
    return(
        <div className="blade-display">
            <Card.Group itemsPerRow={4}>
                {bladeCards}
            </Card.Group>
        </div>
    )
    
}


export default Blades;
import React, {useEffect, useState} from "react";
import { Card } from "semantic-ui-react";
import SithCard from './SithCard'


function Sith(){
    const [sith, setSith] = useState([])
    useEffect(() => {
        fetch('http://localhost:9292/sith')
        .then(res => res.json())
        .then((sith) => setSith(sith))
      }, [])
    
      const sithCards = sith
        .map(sith => {
            return(
                <SithCard key={sith.id} sith={sith} />
            )
        })

    return(
        <div className="sith-display">
            <Card.Group itemsPerRow={4}>
                {sithCards}
            </Card.Group>
        </div>
    )
}


export default Sith
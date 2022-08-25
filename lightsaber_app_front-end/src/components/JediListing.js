import React, {useEffect, useState} from "react";
import { Card } from "semantic-ui-react";
import JediCard from './JediCard'


function Jedi(){
    const [jedi, setJedi] = useState([])
    useEffect(() => {
        fetch('http://localhost:9292/jedi')
        .then(res => res.json())
        .then((jedi) => setJedi(jedi))
      }, [])
    
      const jediCards = jedi
        .map(jedi => {
            return(
                <JediCard key={jedi.id} jedi={jedi} />
            )
        })

    return(
        <div className="jedi-display">
            <Card.Group itemsPerRow={4}>
                {jediCards}
            </Card.Group>
        </div>
    )
}


export default Jedi
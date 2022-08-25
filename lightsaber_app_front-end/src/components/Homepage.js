import React, {useState, useEffect} from 'react'
// import Blade from './Blade';
// import Users from './Users';
// import Client from './Client';
// import {Image} from 'semantic-ui-react'
import {useNavigate} from 'react-router-dom'


function Homepage(){
    const [jedi, setJedi] = useState([])
    const [sith, setSith] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:9292/jedi')
        .then(res => res.json())
        .then((jedi) => setJedi(jedi))
      }, [])

      let navigate = useNavigate()

      function handleClick(jedi){
        navigate(`/jedi`)
      }

      useEffect(() => {
        fetch('http://localhost:9292/sith')
        .then(res => res.json())
        .then((sith) => setSith(sith))
      }, [])

      let navigation = useNavigate()

      function handleClicked(sith){
        navigation(`/sith`)
      }


    return(
        <div className='homePage'>
            <h1 id="destiny"> CHOOSE YOUR DESTINY </h1>
            <h3 id="objective">Choose whether to follow the path of the Jedi or the Sith.</h3>
            <img id="jedi_img" onClick={() => handleClick(jedi)} src="https://user-images.githubusercontent.com/106715328/186465898-8ac00d99-597c-45a2-b53b-0f8c5ff86d15.jpg" alt="light side"/>
            <img id="sith_img" onClick={() => handleClicked(sith)} src="https://user-images.githubusercontent.com/106715328/186466229-eb665631-46e8-4479-a5e8-fef783fa675d.jpg" alt="dark side"/>
        </div>
    )
}

export default Homepage;
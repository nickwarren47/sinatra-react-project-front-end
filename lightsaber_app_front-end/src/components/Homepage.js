import React from 'react'
import Users from '/User'

function Homepage(){
    return(
        <div className='homePage'>
            <h1 id="destiny"> CHOOSE YOUR DESTINY </h1>
            <h3 id="objective">Choose whether to follow the path of the Jedi or the Sith.</h3>
            <button><img src="https://user-images.githubusercontent.com/106715328/186465898-8ac00d99-597c-45a2-b53b-0f8c5ff86d15.jpg" alt="light side"/></button>
            <button><img src="https://user-images.githubusercontent.com/106715328/186466229-eb665631-46e8-4479-a5e8-fef783fa675d.jpg" alt="dark side"/></button>
            <Users/>
        </div>
    )
}

export default Homepage;
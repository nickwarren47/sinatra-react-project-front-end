import { useState } from 'react'
import { Button, Form, Dropdown, Input, Icon } from 'semantic-ui-react'

    
function AddSithUser({ postNewSithUser }){    
  const rankSithOptions = [
    {key: 'Sith Acolyte', text: 'Sith Acolyte', value: 'Sith Acolyte'},
    {key: 'Sith Crusader', text: 'Sith Crusader', value: 'Sith Crusader'},
    {key: 'Sith Warrior', text: 'Sith Warrior', value:  'Sith Warrior'},
    {key: 'Sith Sorcerer', text: 'Sith Sorcerer', value: 'Sith Sorcerer'},
    {key: 'Sith Assassin', text: 'Sith Assassin', value: 'Sith Assassin'},
    {key: 'Sith Master', text: 'Sith Master', value: 'Sith Master'},
    {key: 'Sith Lord', text: 'Sith Lord', value: 'Sith Lord'},
    {key: 'Dark Council', text: 'Dark Council', value: 'Dark Council'}
  ]

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [aliases, setAliases] = useState(""); 
  const [species, setSpecies] = useState("");
  const [image, setImage] = useState("");
  const [sithRank, setSithRank] = useState("");
  
  
  function handleSubmit(event) { 
    event.preventDefault();
    let postReqObj = {
      first_name: firstName,
      last_name: lastName,
      aliases: aliases,
      jedi_or_sith: "Sith",
      sith_rank: sithRank,
      species: species,
      image_url: image
    }
    postNewSithUser(postReqObj)
  }

  return(    
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>First Name</label>
        <Input placeholder='First Name'
        size="huge" 
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)} 
      />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <Input 
        placeholder='Last Name'
        size="huge"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      </Form.Field>
      <Form.Field>
        <label>Aliases</label>
        <Input 
        placeholder='Aliases'
        size="huge"
        value={aliases}
        onChange={(event) => setAliases(event.target.value)} 
      />
      </Form.Field>
      <Form.Field>
        <label>Species</label>
        <Input 
        placeholder='Species'
        size="huge"
        value={species}
        onChange={(event) => setSpecies(event.target.value)} 
      />
      </Form.Field>
      <Form.Field>
        <label>Image Url</label>
        <Input
        icon={<Icon name="camera"/>}
        placeholder='Image Url'
        size="huge"
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />
      </Form.Field>
      <br></br>
      <div className='dropdown'>
        <Dropdown placeholder='Sith Rank' 
          fluid selection
          options={rankSithOptions} 
          size="huge"
          value={sithRank}
          onChange={(event,data) => setSithRank(data.value)}
        />
      </div> 
      <br></br>
      <Button size="huge" type='submit'>Submit</Button>
    </Form> 
  )
}

export default AddSithUser

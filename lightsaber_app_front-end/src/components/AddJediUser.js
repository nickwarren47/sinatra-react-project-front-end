import { useState } from 'react'
import { Button, Form, Dropdown, Input, Icon } from 'semantic-ui-react'

    
function AddJediUser({ postNewJediUser }){    
  const rankJediOptions =[
    {key: 'Youngling', text: 'Youngling', value: 'Youngling'},
    {key: 'Padawan', text: 'Padawan', value: 'Padawan'},
    {key: 'Knight', text: 'Knight', value: 'Knight'},
    {key: 'Master', text: 'Master', value: 'Master'},
    {key: 'Council Member', text: 'Council Member', value: 'Council Member'},
    {key: 'Master of the Order', text: 'Master of the Order', value: 'Master of the Order'},
    {key: 'Grand Master', text: 'Grand Master', value: 'Grand Master'}
  ]

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [aliases, setAliases] = useState(""); 
  const [species, setSpecies] = useState("");
  const [image, setImage] = useState("");
  const [jediRank, setJediRank] = useState("");
  
  
  function handleSubmit(event) { 
    event.preventDefault();
    let postReqObj = {
      first_name: firstName,
      last_name: lastName,
      aliases: aliases,
      jedi_or_sith: "Jedi",
      jedi_rank: jediRank,
      species: species,
      image_url: image
    }
    postNewJediUser(postReqObj)
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
        <Dropdown placeholder='Jedi Rank' 
          fluid selection
          options={rankJediOptions} 
          size="huge"
          value={jediRank}
          onChange={(event,data) => setJediRank(data.value)}
        />
      </div> 
      <br></br>
      <Button size="huge" type='submit'>Submit</Button>
    </Form> 
  )
}

export default AddJediUser

import { Button, Form, Dropdown } from 'semantic-ui-react'

    
function AddJediUser(){    
    
    
    const forceOptions =[
      {key: 'Jedi', text: 'Jedi', value: 'Jedi'},
      {key: 'Sith', text: 'Sith', value: 'Sith'}
      ]
    
    const rankJediOptions =[
        {key: 'Youngling', text: 'Youngling', value: 'Youngling'},
        {key: 'Padawan', text: 'Padawan', value: 'Padawan'},
        {key: 'Knight',	text: 'Knight', value: 'Knight'},
        {key: 'Master', text: 'Master', value: 'Master'},
        {key: 'Council Member',	text: 'Council Member', value: 'Council Member'},
        {key: 'Master of the Order', text: 'Master of the order', value: 'Master of the order'},
        {key: 'Grand Master', text:	'Grand Master',	value: 'Grand Master'}]
      
    const rankSithOptions=[
        {key: 'Sith Acolyte', text: 'Sith Acolyte',	value: 'Sith Acolyte'},
        {key: 'Sith Crusader', text: 'Sith Crusader', value: 'Sith Crusader'},
        {key: 'Sith Warrior', text:	'Sith Warrior',	value:	'Sith Warrior'},
        {key: 'Sith Sorcerer', text: 'Sith Sorcerer', value: 'Sith Sorcerer'},
        {key: 'Sith Assassin', text: 'Sith Assassin', value: 'Sith Assassin'},
        {key: 'Sith Master', text: 'Sith Master', value: 'Sith Master'},
        {key: 'Sith Lord', text: 'Sith Lord', value: 'Sith Lord'},
        {key: 'Dark Council', text: 'Dark Council',	value: 'Dark Council'}
    
      ]

    

    return(    
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <label>Aliases</label>
          <input placeholder='Aliases' />
        </Form.Field>
        <Dropdown placeholder='Jedi or Sith' 
          fluid
          selection
          options={forceOptions}/>
        <Dropdown placeholder='Jedi Rank' 
        fluid selection
        options={rankJediOptions}/> 
        <Button type='submit'>Submit</Button>
     </Form> 
    )}


export default AddJediUser
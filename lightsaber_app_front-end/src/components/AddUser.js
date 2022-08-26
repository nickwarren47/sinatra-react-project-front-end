import { Button, Form, Dropdown } from 'semantic-ui-react'
// import {useNavigate} from "react-router-dom"
import { useState } from "react"
    
function AddJediUser(){    

    // let [pathChosen, setpathChose] = useState(false)
    const [fist_name, setFirst_Name] = useState("")
    const [last_name, setLast_Name] = useState("")
    const [aliases, setAliases] = useState("")
    
    // let navigate = useNavigate()

    // function handleClickJedi(){
    //     navigate.push(`/adduser/addjedi`)
    // }

    // function handleClickSith(){
    //     navigate.push(`/adduser/addsith`)
    // }

    function handleSubmit(e) {  
        e.preventDefault()
        fetch("http://localhost:9292/users",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "first_name": first_name,
                "last_name": last_name,
                "aliases": aliases
            }),
        })
            .then((r) => r.json())
            .then((newUser) => {
                
            })
    }
    
    const forceOptions =[
      {key: 'Jedi', text: 'Jedi', value: 'Jedi'},
      {key: 'Sith', text: 'Sith', value: 'Sith'}
      ]

    

    return(    
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' value={first_name} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' value={last_name}/>
        </Form.Field>
        <Form.Field>
          <label>Aliases</label>
          <input placeholder='Aliases' value={aliases}/>
        </Form.Field>
        <Dropdown placeholder='Jedi or Sith' 
          fluid
          selection
          options={forceOptions}/>
        <Button type='submit' >Submit</Button>
     </Form> 
    )}


export default AddJediUser
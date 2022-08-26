import React from 'react'
import { Card, Image} from 'semantic-ui-react'


function AboutUs(){
return(
    <div id="developer-cards">
    <h1 id="meet-developers">A long time ago, in a galaxy far, far away; these developers made this app...</h1>
    <Card.Group itemsPerRow={4}>
    <Card>
      <Image src='https://user-images.githubusercontent.com/106715328/186782211-3d287438-290f-477e-8381-9f9af861b2d7.jpeg' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Laura Gonzales</Card.Header>
        <Card.Meta>Full Stack Software Engineer</Card.Meta>
        <Card.Description>
        When she isn't busy being the Supreme commander of the Resistance with the coolest double bun hairdo in the galaxy, Laura is a master software engineer residing in the overpriced tech empire of San Francisco, California.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Image src='https://user-images.githubusercontent.com/106715328/186783883-efeca535-2d56-412e-94df-34500cca1417.jpg' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Jenipher Belloso</Card.Header>
        <Card.Meta>Full Stack Software Engineer</Card.Meta>
        <Card.Description>
          Jenipher is an avid software engineer from Los Angeles, California.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Image src='https://user-images.githubusercontent.com/106715328/182721332-d0310aca-de07-48c8-9408-f8add1acad05.jpg' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Nick Warren</Card.Header>
        <Card.Meta>Full Stack Software Engineer Jedi</Card.Meta>
        <Card.Description>
          Nick, a Software Engineer master he is. Practiced and honed his software skills at the Flatiron School Jedi Temple where he resides in Denver, Colorado.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Image src='https://user-images.githubusercontent.com/106715328/186782421-38af1cb9-b48a-4db4-872a-3a1c6b814702.jpg' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Flordiliza Mae Canlas</Card.Header>
        <Card.Meta>Honorary Contributor and Full Stack Software Engineer</Card.Meta>
        <Card.Description>
          Darth Mae is the Sith Lord of Semantic UI from Los Angeles, California.
        </Card.Description>
      </Card.Content>
    </Card>
    </Card.Group>
  </div>
)
}

export default AboutUs;
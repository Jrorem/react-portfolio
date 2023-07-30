import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Portfolio () {
    return <div id="portfolio">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
        <div class="app">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Concerts Near Me</Card.Title>
            <Card.Text>
              A web application to find concerts going on near your ip address. adding text to make a third line.
            </Card.Text>
            <Button 
            href="https://jrorem.github.io/concerts-near-me/" variant="primary">View Project</Button>
          </Card.Body>
        </Card>
        </div>
        <div class="app">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Weather Dashboard</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button
            href="https://jrorem.github.io/weather-dashboard/" variant="primary">View Project</Button>
          </Card.Body>
        </Card>
        </div>
        <div class="app">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Pumped Up</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">View Project</Button>
          </Card.Body>
        </Card>
        </div>
        <div class="app">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">View Project</Button>
          </Card.Body>
        </Card>
        </div>
        <div class="app">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">View Project</Button>
          </Card.Body>
        </Card>
        </div>
        <div class="app">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">View Project</Button>
          </Card.Body>
        </Card>
        </div>
      
      </div>
}
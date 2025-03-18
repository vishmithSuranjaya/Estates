import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Adcard() {
  return (
    <Card style={{display:"grid",gridTemplateColumns:"30% 70%"}}>
      {/* Add an image to the card */}
      <div style={{width:"18rem"}}>
      <Card.Img 
        variant="top" 
        src="https://via.placeholder.com/286x180" // Replace with your image URL
        alt="Card Image"
      />
      </div>
      <div>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Details view</Button>
      </Card.Body>
      </div>
    </Card>
  );
}

export default Adcard;

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
let imgstyle={
    maxWidth:"500px",
    maxHeight:"500px",
}
function Offices(props) {
  return (
    <Card className="text-center">
      <Card.Header>{props.head}</Card.Header>
      <Card.Body>
      <Card.Img variant="top" src={props.img}  style={imgstyle}/>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.description}
        </Card.Text>
        <Button variant="danger">View on map</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default Offices;
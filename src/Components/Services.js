import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import pic1 from "../Pictures/pic1.jpg"

const cardStyle={
    maxWidth:"300px"
}

function Services(props) {
  return (
    <CardGroup className=" mt-4 mb-4 col-md-4" >
         <Card >
        <Card.Img variant="top" src={pic1} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.desciption}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Services;
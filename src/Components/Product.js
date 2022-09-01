import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product(props) {
  return (
    <Card className='col-md-3 mt-2 border-dark shadow border-dotted '>
      <Card.Img variant="top" src={props.pic} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;

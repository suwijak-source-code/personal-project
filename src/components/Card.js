import { Card, Button } from "react-bootstrap";

function PictureCard() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://picsum.photos/300/300" />
        <Card.Body>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis
            lacinia odio.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default PictureCard;

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards(props) {
    console.log(props)
    
    const { strMeal,strMealThumb,idMeal  } = props


  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>
            {idMeal}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;

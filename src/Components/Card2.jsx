import Card from "react-bootstrap/Card";

const Card2 = (props) => {
  console.log(props);
  const emojiPediaArray = (emojiPedia) => {
    return (
      <div>
        <Card style={{ width: "18rem" }} className="card">
          <Card.Body>
            <Card.Title>{emojiPedia.emoji}</Card.Title>
            <Card.Subtitle>{emojiPedia.emojiName}</Card.Subtitle>
            <Card.Text>{emojiPedia.meaning}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  };

  return props.emojiPedia.map(emojiPediaArray);
};

export default Card2;

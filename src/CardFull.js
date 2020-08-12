import React from "react";
import "./app.css";
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';

class CardFull extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      specificData: {},
    };
  };

  render() {
  
    let selection = this.state.specificData;

    return(
      <div class="w3-row-padding">
        <div class="w3-col" >
            <Card style={{ width: '100%' }} id={selection.id}>
              <Card.Body>
                <Card.Title> {selection.rocket_name} </Card.Title>
                <Card.Title> {selection.name} </Card.Title>
                  <Figure>
                    <Figure.Image
                      width="100%"
                      height="100%"
                      src={selection.flickr_images}
                      rounded
                    />
                  </Figure> 
                  <Card.Title class="card-description"> {selection.description} </Card.Title>
                  <Card.Text> {selection.success_rate_pct}</Card.Text>
                  <Card.Text> {selection.cost_per_launch} </Card.Text>
                  <Card.Text> {selection.crew_capacity} </Card.Text>
                  <Card.Text> {selection.country} </Card.Text>
              </Card.Body>
            </Card>
          </div>
       </div>
    )
  }

}

export default CardFull;
import React from "react";
import "./app.css";
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';

class CardSummary extends React.Component {

  activeConversionToString = (boolean) => {
    if (boolean === true ) {
      return "Currently active"
    } else {
      return "Not currently active"
    }
  } 
 
  render() {
    return(
      <div>
       <section>
        <div class="w3-row-padding">
          {this.props.data.map(
            (selection) => {
              return(
                <div class="w3-col s4" >
                  <Card style={{ width: '100%' }} id={selection.id}>
                    <Card.Body>
                    <Figure>
                    <Figure.Image
                      width="100%"
                      height="100%"
                      src={selection.flickr_images}
                      rounded
                    />
                  </Figure> 
                      <Card.Title> {selection.name} </Card.Title>
                      <Card.Title> {selection.rocket_name} </Card.Title>
                        <Card.Text> First flight: {selection.first_flight} </Card.Text>
                        <Card.Text> {this.activeConversionToString(selection.active)} </Card.Text>
                      <Button onClick={ () => this.props.seeMore(selection) } variant="secondary" size="sm">See more</Button>
                    </Card.Body>
                  </Card>
                </div>
              )
            })
          }
          </div>
        </section>
      </div>
    )
  }

}

export default CardSummary;
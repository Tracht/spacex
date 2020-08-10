import React from "react";
import "./app.css";
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';

class CardFull extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  };

  componentDidMount() {
    this.fetchData(`https://api.spacexdata.com/v3/rockets/falcon9`);
  }

  fetchData = (apiToFetch) => {
    fetch(apiToFetch)
    .then(response => response.json())
    .then((data) => {
      console.log('Success:', data);
      this.setState({
        data: data,
      });
    })
    .catch((error) => {
      console.log("Error:", error)
    });
  };

  render() {
  
    let rocket = this.state.data;

    return(
      <div class="w3-row-padding">
        <div class="w3-col s4" >
            <Card style={{ width: '60rem' }} key={rocket.id}>
              <Card.Body>
                <Card.Title> {rocket.rocket_name} </Card.Title>
                <Card.Title class="card-description"> {rocket.description} </Card.Title> <br></br>
                <Card.Text> Cost per launch: {rocket.cost_per_launch} </Card.Text>
                <Card.Text> First flight: {rocket.first_flight} </Card.Text>
                <Card.Text> Country: {rocket.country} </Card.Text>
                <Figure>
                  <Figure.Image
                    width={171*2}
                    height={180*2}
                    alt="Rocket"
                    src={rocket.flickr_images}
                    rounded
                  />
                </Figure> 
              </Card.Body>
            </Card>
            <br></br>
        </div>
      </div>
    )
  }

}

export default CardFull;
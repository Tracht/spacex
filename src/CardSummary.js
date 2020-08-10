import React from "react";
import "./app.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class CardSummary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  };

  componentDidMount() {
    this.fetchData(`https://api.spacexdata.com/v3/rockets?limit=4`);
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
    return(
      <div>
       <section>
        {/* <div class="grid-container"> */}
        <div class="w3-row-padding">
          {this.state.data.map(
            (rocket) => {
              return(
                <div class="w3-col s4" >
                  <Card style={{ width: '25rem' }} key={rocket.id}>
                    <Card.Body>
                      <Card.Title> {rocket.rocket_name} </Card.Title>
                      <Card.Text>
                        Success rate: {rocket.success_rate_pct}%
                      </Card.Text>
                      <Card.Text>
                        {rocket.description.substring(0,80)}...
                      </Card.Text>
                      <Button variant="info">See more</Button>
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
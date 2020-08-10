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
          {this.state.data.map(
            (rocket) => {
              return(
                <Card style={{ width: '30rem' }} key={rocket.id}>
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body>
                    <Card.Title> {rocket.rocket_name} </Card.Title>
                    <Card.Text>
                      Success rate: {rocket.success_rate_pct}%
                    </Card.Text>
                    <Card.Text>
                      {rocket.description} 
                    </Card.Text>
                    <Card.Text>
                      Currently active? {rocket.active.toString()} 
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              )
            })
          }
        </section>
      </div>
    )
  }

}

export default CardSummary;
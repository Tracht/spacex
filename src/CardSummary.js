import React from "react";
import "./app.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class CardSummary extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: [],
  //     selection: "rockets"
  //   };
  // };

  // componentDidMount() {
  //   this.fetchData(`https://api.spacexdata.com/v3/${this.state.selection}`);
  // }

  // fetchData = (apiToFetch) => {
  //   fetch(apiToFetch)
  //   .then(response => response.json())
  //   .then((data) => {
  //     console.log('Success:', data);
  //     this.setState({
  //       data: data,
  //     });
  //   })
  //   .catch((error) => {
  //     console.log("Error:", error)
  //   });
  // };

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
                  <Card style={{ width: '25rem' }} id={selection.id}>
                    <Card.Body>
                      <Card.Title> {selection.name} </Card.Title>
                      <Card.Title> {selection.rocket_name} </Card.Title>
                        <Card.Text> First flight: {selection.first_flight} </Card.Text>
                        <Card.Text> {this.activeConversionToString(selection.active)} </Card.Text>
                        {/* <Button onClick={show} variant="secondary" size="sm">See more</Button> */}
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
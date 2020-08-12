import React from "react";
import "./app.css";
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';

class CardFull extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: "dragon2",
        }
      ],
      selection: "dragons"
    };
  };

  // componentDidMount() {
  // if (this.state.selection === 'dragons') {
  //   return this.fetchData(`https://api.spacexdata.com/v3/${this.state.selection}/${this.state.data.id}`); 
  // } else {
  //   return this.fetchData(`https://api.spacexdata.com/v3/${this.state.selection}/${this.state.data.rocket_name}`) 
  //   }
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


  render() {
  
    let selection = this.state.data;

    return(
      <div class="w3-row-padding">
        <div class="w3-col s16" >
            <Card style={{ width: '90%' }} key={selection.id}>
              <Card.Body>
                <Card.Title> {selection.rocket_name} </Card.Title>
                <Card.Title> {selection.name} </Card.Title>
                  <Figure>
                    <Figure.Image
                      width={171*2}
                      height={180*2}
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
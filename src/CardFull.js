import React from "react";
import "./app.css";

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
      <div>
       <section key={rocket.id}>
          <p> Name: {rocket.rocket_name} </p> 
          <p> Cost_per_launch: {rocket.cost_per_launch} </p>
          <p> First flight: {rocket.first_flight} </p>
          <p> Country: {rocket.country}</p>
          <img src={rocket.flickr_images} alt="Rocket"/>
          <br></br>
        </section>
      </div>
    )
  }

}

export default CardFull;
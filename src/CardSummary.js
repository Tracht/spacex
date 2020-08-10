import React from "react";
import "./app.css";

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
                <section key={rocket.id}>
                  <p> Name: {rocket.rocket_name} </p> 
                  <p> Success rate: {rocket.success_rate_pct}% </p>
                  <p> Description: </p>
                  <p> {rocket.description} </p>
                  <p> Currently active? {rocket.active.toString()}  </p>

                  <br></br>
                </section>
              )
            })
          }
        </section>
      </div>
    )
  }

}

export default CardSummary;
import React from "react";
import "./app.css";
import Card from 'react-bootstrap/Card';

class DisplayActiveSelection extends React.Component {

  render() {

    return(

      this.props.showAllCards.map( (selection) => {

        if ( selection.id === this.props.showSpecificCard.id ) {
          return ( 
            <div class="w3-row-padding">
              <div class="w3-col" >
                <Card style={{ width: '100%' }} id={selection.id}>
                  <Card.Body>
                    <Card.Title> {selection.rocket_name} </Card.Title>
                    <Card.Title> {selection.name} </Card.Title>
                    <Card.Text> {selection.country} </Card.Text>
                    <Card.Text> 
                        {selection.success_rate_pct !== "0" && selection.success_rate_pct ? 
                        <p> Success rate: {selection.success_rate_pct}% </p> : null}  
                    </Card.Text>
                    <Card.Text> 
                      {selection.cost_per_launch &&
                      <p> Cost per launch: <span></span> 
                        { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(`${selection.cost_per_launch}`)}
                      </p>}
                    </Card.Text>
                    <Card.Text> 
                      {selection.crew_capacity !== "0" && selection.crew_capacity ? 
                      <p> Crew capacity: {selection.crew_capacity} </p> : null}
                    </Card.Text>
                    <Card.Text class="card-description"> {selection.description} </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          )
        } else {
          return null;
        }
      }
    )
  )
}

}

export default DisplayActiveSelection;
import React from 'react';
import CardSummary from './CardSummary.js';
import CardFull from './CardFull.js';
import DropDown from './DropDown.js';


class CardSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      summaryData: [], // shows all cards
      specificData: {}, // shows selected card
      selection: 'rockets',
      showFullCardDragon: true,
      showFullCardRocket: true,
    };
  };

  componentDidMount() {
    var userSelection = this.state.selection; 
    fetch(`https://api.spacexdata.com/v3/${userSelection}`)
    .then(response => response.json())
    .then((data) => {
        console.log('Fetch CardSummary:', data);
        this.setState({
          summaryData: data,
        });
      })
    .catch((error) => {
      console.log("Fetch CardSummary Error:", error)
    });
  }

  // Select DRAGONS from DropDown ------------------------------- //
  // ----------------------------------------------------------- //
  setDragon = (e) => {
    e.preventDefault();
    this.setState({
      selection: "dragons",
      showFullCardDragons: true, 
      showFullCardRockets: false 
    });
    fetch(`https://api.spacexdata.com/v3/dragons`)
    .then(response => response.json())
    .then((data) => {
        console.log('Fetch CardSummary:', data);
        this.setState({
          summaryData: data,
        });
      })
    .catch((error) => {
      console.log("Fetch CardSummary Error:", error)
    });
  };

  // Select ROCKETS from DropDown ------------------------------- //
  // ----------------------------------------------------------- //
  setRocket = (e) => {
    e.preventDefault();
    this.setState({
      selection: "rockets",
      showFullCardDragons: false, 
      showFullCardRockets: true 
    });
    fetch(`https://api.spacexdata.com/v3/rockets`)
    .then(response => response.json())
    .then((data) => {
        console.log('Fetch CardSummary:', data);
        this.setState({
          summaryData: data,
        });
      })
    .catch((error) => {
      console.log("Fetch CardSummary Error:", error)
    });
  };

  // Select a card to SEE MORE  ------------------------------- // 
  // ----------------------------------------------------------- //
  seeMore = (selection) => {
    this.setState({
      specificData: selection,
    });
  }; 

  render() {

    // console.log("summaryData", this.state.summaryData, 
    // "fullCardRocket?", this.state.showFullCardRocket,
    // "fullCardDragon?", this.state.showFullCardDragon)
   
    let showFullCardRocket = this.state.showFullCardRocket; 

    return(
      <div>
        <DropDown setDragon={this.setDragon} setRocket={this.setRocket}/>
        { showFullCardRocket ? <CardFull summaryData={this.state.summaryData} specificData={this.state.specificData} selection={this.state.selection} /> : null }
        <CardSummary seeMore={this.seeMore} summaryData={this.state.summaryData} specificData={this.state.specificData} />
      </div>
    );
  }
}

export default CardSection;




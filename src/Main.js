import React from 'react';
import DisplayAllCards from './DisplayAllCards.js';
import DisplayActiveSelection from './DisplayActiveSelection.js';
import DropDown from './DropDown.js';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showAllCards: [], // shows all cards // summaryCard
      showSpecificCard: {}, // shows selected card // summaryData
      selection: 'rockets'
    };
  };

  componentDidMount() {
    var userSelection = this.state.selection; 
    fetch(`https://api.spacexdata.com/v3/${userSelection}`)
    .then(response => response.json())
    .then((data) => {
        console.log('Fetch CardSummary:', data);
        this.setState({
          showAllCards: data,
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
    fetch(`https://api.spacexdata.com/v3/dragons`)
    .then(response => response.json())
    .then((data) => {
        console.log('Fetch CardSummary:', data);
        this.setState({
          showAllCards: data,
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
    fetch(`https://api.spacexdata.com/v3/rockets`)
    .then(response => response.json())
    .then((data) => {
        console.log('Fetch CardSummary:', data);
        this.setState({
          showAllCards: data,
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
      showSpecificCard: selection,
    });
  }; 

  render() {
    let showSpecificCard = this.state.showSpecificCard; 

    return(
      <div>
        <DropDown setDragon={this.setDragon} setRocket={this.setRocket}/>
        
        { showSpecificCard ? <DisplayActiveSelection 
          selection={this.selection} 
          showAllCards={this.state.showAllCards} 
          showSpecificCard={this.state.showSpecificCard} 
          /> : null }

        <DisplayAllCards seeMore={this.seeMore} showAllCards={this.state.showAllCards} showSpecificCard={this.state.showSpecificCard} />
      </div>
    );
  }
}

export default Main;




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
      showFullCard: true,
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
   
    let showFullCard = this.state.showFullCard; 

    return(
      <div>
        <DropDown setDragon={this.setDragon} setRocket={this.setRocket}/>
        
        { showFullCard ? <CardFull 
          selection={this.selection} 
          summaryData={this.state.summaryData} 
          specificData={this.state.specificData} 
          /> : null }

        <CardSummary seeMore={this.seeMore} summaryData={this.state.summaryData} specificData={this.state.specificData} />
      </div>
    );
  }
}

export default CardSection;




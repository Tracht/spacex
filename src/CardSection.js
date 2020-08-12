import React from 'react';
import CardSummary from './CardSummary.js';
import CardFull from './CardFull.js';
import DropDown from './DropDown.js';


class CardSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      summaryData: [],
      specificData: {},
      selection: 'rockets',
      showFullCardDragon: false,
      showFullCardRocket: false,
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
          showFullCardDragons: false, 
          showFullCardRockets: false 
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
          showFullCardDragons: false, 
          showFullCardRockets: false 
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
          showFullCardDragons: false, 
          showFullCardRockets: false 
        });
      })
  .catch((error) => {
      console.log("Fetch CardSummary Error:", error)
    });
  };

  // Select a card to SEE MORE  ------------------------------- // 
  // ----------------------------------------------------------- //
  seeMore = (selection) => {
    // selection.preventDefault();
    this.setState({
      specificData: selection,
    });
    if ( this.showFullCardDragon === true ) {
        fetch(`https://api.spacexdata.com/v3/dragons/${this.state.specificData.id}`) 
        .then(response => response.json())
        .then((data) => {
          console.log('Fetch CardFull:', data);
          this.setState({
            specificData: data,
          });
         })
        .catch((error) => {
          console.log("Fetch CardFull Error:", error)
        });
    } else {
        fetch(`https://api.spacexdata.com/v3/rockets/${this.state.specificData.rocket_id}`)
        .then(response => response.json())
        .then((data) => {
          console.log('Fetch CardFull:', data);
          this.setState({
            specificData: data,
          });
         })
        .catch((error) => {
          console.log("Fetch CardFull Error:", error)
        });
    }
  }; 

  render() {
   
    let showFullCardDragon = this.state.showFullCardDragon; 
    let showFullCardRocket = this.state.showFullCardRocket; 

    return(
      <div>
        <DropDown setDragon={this.setDragon} setRocket={this.setRocket}/>
        { showFullCardDragon ? <CardFull specificData={this.state.summaryData} selection={this.state.selection} /> : null }
        { showFullCardRocket ? <CardFull specificData={this.state.summaryData} selection={this.state.selection} /> : null }
        <CardSummary seeMore={this.seeMore} data={this.state.summaryData} specificData={this.state.specificData} />
      </div>
    );
  }
}

export default CardSection;




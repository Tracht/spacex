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
    const userSelection = this.state.selection; 
    const showFullCardDragon = this.state.showFullCardDragon; 
    const showFullCardRocket = this.state.showFullCardRocket; 
    const dragonID = this.state.specificData.id;
    const rocketID = this.state.specificData.rocket_id;

    if (showFullCardDragon === false || showFullCardRocket === false ) {
      return (this.fetchCardSummary(`https://api.spacexdata.com/v3/${userSelection}`));
    } else if ( showFullCardDragon === true ) {
      return( 
        this.fetchCardSummary(`https://api.spacexdata.com/v3/${userSelection}`), 
        this.fetchCardFull(`https://api.spacexdata.com/v3/${userSelection}/${dragonID}`)
        )
    } else if ( showFullCardRocket === true ) {
      return(
        this.fetchCardSummary(`https://api.spacexdata.com/v3/${userSelection}`),
        this.fetchCardFull(`https://api.spacexdata.com/v3/${userSelection}/${rocketID}`)
      )
    }
  }

  // From CardSummary ------------------------------- // 
  fetchCardSummary = (apiToFetch) => {
    fetch(apiToFetch)
    .then(response => response.json())
    .then((data) => {
      console.log('Success:', data);
      this.setState({
        summaryData: data,
        selection: "dragons",
        showFullCardDragons: true, 
        showFullCardRockets: false 
      });
    })
    .catch((error) => {
      console.log("Error:", error)
    });
  };

  // From CardFull ------------------------------- // 
    fetchCardFull = (apiToFetch) => {
      fetch(apiToFetch)
      .then(response => response.json())
      .then((data) => {
        console.log('Success:', data);
        this.setState({
          specificData: data,
        });
      })
      .catch((error) => {
        console.log("Error:", error)
      });
    };
  
    seeMore = (selection) => {
      this.setState({
        specificData: selection,
      });

    } 

  // DropDown Component ------------------------------- //
  setDragon = (e) => {
    e.preventDefault();
    this.setState({
      selection: "dragons",
      showFullCardDragons: true, 
      showFullCardRockets: false 
    });
    console.log("Selection:", this.state.selection, "Dragons:", this.state.showFullCardDragons, "Rockets:", this.state.showFullCardRockets);
  }

  setRocket = (e) => {
    e.preventDefault();
    this.setState({
      selection: "rockets",
      showFullCardDragons: false, 
      showFullCardRockets: true 
    });
    console.log("Selection:", this.state.selection, "Dragons:", this.state.showFullCardDragons, "Rockets:", this.state.showFullCardRockets);
  }

  render() {
    let showFullCardDragon = this.state.showFullCardDragon; 
    let showFullCardRocket = this.state.showFullCardRocket; 

    return(
      <div>
        <DropDown setDragon={this.setDragon} setRocket={this.setRocket}/>
        { showFullCardDragon ? <CardFull specificData={this.state.summaryData} selection={this.state.selection} /> : null }
        { showFullCardRocket ? <CardFull specificData={this.state.summaryData} selection={this.state.selection} /> : null }
        <CardSummary handleClick={this.handleClick} data={this.state.summaryData} specificData={this.state.specificData} />
      </div>
    );
  }
}

export default CardSection;




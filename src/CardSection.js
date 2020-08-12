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
      return (this.fetchCardSummary(`https://api.spacexdata.com/v3/${userSelection}`), 
      console.log("ComponentDidMount Summary Data:", this.summaryData));
    } else if ( showFullCardDragon === true ) {
      return( 
        this.fetchCardSummary(`https://api.spacexdata.com/v3/${userSelection}`), 
        this.fetchCardFull(`https://api.spacexdata.com/v3/${userSelection}/${dragonID}`),
        console.log("ComponentDidMount Summary Data:", this.summaryData, "Specific Data", this.specificData)
        )
    } else if ( showFullCardRocket === true ) {
      return(
        this.fetchCardSummary(`https://api.spacexdata.com/v3/${userSelection}`),
        this.fetchCardFull(`https://api.spacexdata.com/v3/${userSelection}/${rocketID}`), 
        console.log("ComponentDidMount Summary Data:", this.summaryData, "Specific Data", this.specificData)
      )
    }
  }

  // From CardSummary ------------------------------- // 
  fetchCardSummary = (apiToFetch) => {
    fetch(apiToFetch)
    .then(response => response.json())
    .then((data) => {
      console.log('Fetch CardSummary Success:', data);
      this.setState({
        summaryData: data,
        showFullCardDragons: true, 
        showFullCardRockets: false 
      });
    })
    .catch((error) => {
      console.log("Fetch CardSummary Error:", error)
    });
  };

  // From CardFull ------------------------------- // 
    fetchCardFull = (apiToFetch) => {
      fetch(apiToFetch)
      .then(response => response.json())
      .then((data) => {
        console.log('Fetch CardFull Success:', data);
        this.setState({
          specificData: data,
        });
      })
      .catch((error) => {
        console.log("Fetch CardFull Error:", error)
      });
    };
  
    seeMore = (selection) => {
      selection.preventDefault();
      this.setState({
        specificData: selection,
      });
    }; 

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
        <DropDown setDragon={this.setDragon.bind(this)} setRocket={this.setRocket.bind(this)}/>
        { showFullCardDragon ? <CardFull specificData={this.state.summaryData} selection={this.state.selection} /> : null }
        { showFullCardRocket ? <CardFull specificData={this.state.summaryData} selection={this.state.selection} /> : null }
        <CardSummary handleClick={this.handleClick} data={this.state.summaryData} specificData={this.state.specificData} />
      </div>
    );
  }
}

export default CardSection;




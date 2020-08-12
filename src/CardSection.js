import React from 'react';
import CardSummary from './CardSummary.js';
import CardFull from './CardFull.js';
import DropDown from './DropDown.js';


class CardSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selection: 'rockets',
      showFullCardDragon: false,
      showFullCardRocket: true,
    };
  };

  componentDidMount() {
    const userSelection = this.state.selection; 
    const showFullCardDragon = this.state.showFullCardDragon; 
    const showFullCardRocket = this.state.showFullCardRocket; 
    const dragonID = this.state.data.id;
    const rocketID = this.state.data.rocket_id;

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
        data: data,
      });
    })
    .catch((error) => {
      console.log("Error:", error)
    });
  };

  // seeMore= (e) => {
  //   // this.setState.selection = null;
  //   e.preventDefault();
  //   this.setState({
  //     data: {},
  //   });
  //   console.log("See More", this.state.data);
  // }

  // From CardFull ------------------------------- // 
    fetchCardFull = (apiToFetch) => {
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
  

  // DropDown Component ------------------------------- //
  setDragon = (e) => {
    // this.setState.selection = null;
    e.preventDefault();
    this.setState({
      selection: "dragons",
      showFullCardDragons: true, 
      showFullCardRockets: false 
    });
    console.log(this.state.selection, this.state.showFullCardDragons, this.state.showFullCardRockets);
  }

  setRocket = (e) => {
    // this.setState.selection = null;
    e.preventDefault();
    this.setState({
      selection: "rockets",
      showFullCardDragons: false, 
      showFullCardRockets: true 
    });
    console.log(this.state.selection, this.state.showFullCardDragons, this.state.showFullCardRockets);
  }

  render() {
    let showFullCardDragon = this.state.showFullCardDragon; 
    let showFullCardRocket = this.state.showFullCardRocket; 

    return(
      <div>
        <DropDown setDragon={this.setDragon} setRocket={this.setRocket}/>
        <CardSummary data={this.state.data} />
       { showFullCardDragon ? <CardFull data={this.state.data} /> : null }
       { showFullCardRocket ? <CardFull data={this.state.data} /> : null }
      </div>
    );
  }
}

export default CardSection;




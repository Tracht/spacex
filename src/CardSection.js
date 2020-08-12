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
    // var showFullCardDragon = this.state.showFullCardDragon; 
    // var showFullCardRocket = this.state.showFullCardRocket; 
    // var dragonID = this.state.specificData.id;
    // var rocketID = this.state.specificData.rocket_id;

    fetch(`https://api.spacexdata.com/v3/${userSelection}`)
    .then(response => response.json())
    .then((data) => {
        console.log('Fetch CardSummary Success:', data);
        this.setState({
          summaryData: data,
          showFullCardDragons: false, 
          showFullCardRockets: false 
        });
      })
    .catch((error) => {
      console.log("Fetch CardSummary Error:", error)
    });

  //   if (showFullCardDragon === false || showFullCardRocket === false ) {
  //     return (this.fetchCardSummary(`https://api.spacexdata.com/v3/${userSelection}`), 
  //     console.log("ComponentDidMount Summary Data:", this.summaryData));
  //   } else if ( showFullCardDragon === true ) {
  //     return( 
  //       this.fetchCardSummary(`https://api.spacexdata.com/v3/${userSelection}`), 
  //       this.fetchCardFull(`https://api.spacexdata.com/v3/${userSelection}/${dragonID}`),
  //       console.log("ComponentDidMount Summary Data:", this.summaryData, "Specific Data", this.specificData)
  //       )
  //   } else if ( showFullCardRocket === true ) {
  //     return(
  //       this.fetchCardSummary(`https://api.spacexdata.com/v3/${userSelection}`),
  //       this.fetchCardFull(`https://api.spacexdata.com/v3/${userSelection}/${rocketID}`), 
  //       console.log("ComponentDidMount Summary Data:", this.summaryData, "Specific Data", this.specificData)
  //     )
  //   }
  }


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
  
    // seeMore = (selection) => {
    //   selection.preventDefault();
    //   this.setState({
    //     specificData: selection,
    //   });
    // }; 

  // DropDown Component ------------------------------- //
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
        console.log('Fetch CardSummary Success:', data);
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
        console.log('Fetch CardSummary Success:', data);
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


  render() {
   
    let showFullCardDragon = this.state.showFullCardDragon; 
    let showFullCardRocket = this.state.showFullCardRocket; 

    // console.log("Summary Data", this.props.summaryData);
    // console.log("Specific Data", this.props.specificData);
    // console.log("Selection", this.props.selection);
    // console.log("showFullCardDragon", this.props.showFullCardDragon);
    // console.log("showFullCardRocket", this.props.showFullCardRocket);
    console.log("Render State:") 
    console.log("State.Selection", this.state.selection); 
    console.log("showFullCardDragons?", this.state.showFullCardDragons); 
    console.log("showFullCardRockets?", this.state.showFullCardRockets);
    console.log("test", this.state.test);

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




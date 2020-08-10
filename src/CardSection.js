import React from 'react';
import CardSummary from './CardSummary.js';
import CardFull from './CardFull.js';
class CardSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showFullCard: true,
    };
  };

  render() {
    return(
      <div>
        <CardSummary />
        {/* { this.showFulLCard ? <CardFull /> : null } */}
        <br></br>
        <CardFull />
      </div>
    );
   }
    

}

export default CardSection;
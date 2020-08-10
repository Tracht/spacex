import React from 'react';
import CardSummary from './CardSummary.js';
import CardFull from './CardFull.js';
class CardSection extends React.Component {


  render() {
    return(
      <div>
        <CardSummary />
        <CardFull />
      </div>
    );
  };

}

export default CardSection;
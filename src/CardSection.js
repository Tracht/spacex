import React from 'react';
import CardSummary from './CardSummary.js';
import CardFull from './CardFull.js';

class CardSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  };

  render() {
    return(
      <div>
        <CardSummary />
        {/* { !this.showFullCard ? <CardFull /> : "Nothing to see here"}
        <br></br> */}
        <CardFull />
      </div>
    );
  }
}

export default CardSection;



